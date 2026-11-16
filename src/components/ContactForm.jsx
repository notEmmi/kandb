import { useState } from "react";
import "./ContactForm.css";

// Get a free key at https://web3forms.com (enter kandbcleaners3451@gmail.com,
// they email you the key). It's safe to keep in front-end code — it only
// lets people SEND to your inbox, not read it.
const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    // Honeypot: real people never fill this hidden field, bots do
    if (data.botcheck) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: "K&B Website",
          subject: `Website message: ${data.subject}`,
          name: data.name,
          email: data.email,
          replyto: data.email, // so hitting "Reply" in Gmail goes to the customer
          message: data.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-form">
      <div className="contact-form-header">
        <p className="section-label">SEND US A MESSAGE</p>
        <h3>Questions? We'll get back to you.</h3>
      </div>

      <form className="contact-form-body" onSubmit={handleSubmit}>
        {/* Honeypot (hidden from people) */}
        <input type="checkbox" name="botcheck" className="contact-form-hp" tabIndex={-1} autoComplete="off" />

        <div className="contact-form-row">
          <label className="contact-form-field">
            <span>Name</span>
            <input type="text" name="name" required autoComplete="name" />
          </label>
          <label className="contact-form-field">
            <span>Email</span>
            <input type="email" name="email" required autoComplete="email" />
          </label>
        </div>

        <label className="contact-form-field">
          <span>Subject</span>
          <input type="text" name="subject" required placeholder="e.g. Wedding dress cleaning" />
        </label>

        <label className="contact-form-field">
          <span>Message</span>
          <textarea name="message" rows={5} required />
        </label>

        <div className="contact-form-footer">
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p className="contact-form-status" role="status" aria-live="polite">
            {status === "sent" && <span className="is-sent">Thanks! We got your message and will reply soon.</span>}
            {status === "error" && (
              <span className="is-error">
                Something went wrong. Please call us at <a href="tel:+17166683088">(716) 668-3088</a>.
              </span>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}
