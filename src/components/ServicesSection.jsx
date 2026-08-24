import "./ServicesSection.css"

export default function ServicesSection() {
	return (
		<section className="services" id="services">
			<div className="services-header">
				<p className="section-label">WHAT WE DO</p>
				<h2>Our Services</h2>
			</div>

			<div className="drycleaning">
				<div className="drycleaning-media">
					<img />
					<img />
					<img />
				</div>
				<div className="drycleaning-overlay">
					<div className="drycleaning-caption">
						<div className="drycleaning-caption" data-caption>
							Everyday &amp; Casual Wear
						</div>
						<div className="dots" data-dots>
							<button className="dots-dot is-active" data-index="0" aria-label="Everyday &amp; Casual Wear"></button>
							<button className="dots-dot" data-index="1" aria-label="Leather &amp; Suede"></button>
							<button className="dots-dot" data-index="2" aria-label="Wedding Dresses"></button>
							<button className="dots-dot" data-index="3" aria-label="Shoes &amp; Uggs"></button>
							<button className="dots-dot" data-index="4" aria-label="Beading &amp; Embellishments"></button>
							<button className="dots-dot" data-index="5" aria-label="Costumes"></button>
							<button className="dots-dot" data-index="6" aria-label="Wool, Cashmere &amp; Silk"></button>
							<button className="dots-dot" data-index="7" aria-label="Accessories"></button>
							<button className="dots-dot" data-index="8" aria-label="Sportswear"></button>
						</div>
					</div>
				</div>

				<div className="flagship__body">
					<p className="section-label">OUR MAIN SERVICE</p>
					<div className="drycleaning-name">Dry Cleaning</div>
					<p className="drycleaning-description">
						Expert, careful cleaning for every kind of garment — from delicate silks to bulky
						sportswear. Tap any item to see our work.
					</p>

					<div className="garments" data-garments>
						<button className="garments-item is-active" data-index="0"><span>Everyday &amp; Casual Wear</span></button>
						<button className="garments-item" data-index="1"><span>Leather &amp; Suede</span></button>
						<button className="garments-item" data-index="2"><span>Wedding Dresses (Boxed &amp; Preserved)</span></button>
						<button className="garments-item" data-index="3"><span>Shoes &amp; Uggs</span></button>
						<button className="garments-item" data-index="4"><span>Beading &amp; Embellishments</span></button>
						<button className="garments-item" data-index="5"><span>Costumes</span></button>
						<button className="garments-item" data-index="6"><span>Wool, Cashmere &amp; Silk</span></button>
						<button className="garments-item" data-index="7"><span>Accessories</span></button>
						<button className="garments-item" data-index="8"><span>Sportswear</span></button>
					</div>
				</div>
			</div>


		</section>
	)
}
