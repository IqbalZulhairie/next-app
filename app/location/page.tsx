import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Find Us | Nexora Labs",
	description: "Visit Nexora Labs and get directions with Google Maps.",
};

const companyLocation =
	process.env.NEXT_PUBLIC_COMPANY_LOCATION || "Nexora Labs, Manila, Philippines";
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const mapsQuery = encodeURIComponent(companyLocation);
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const embedUrl = mapsApiKey
	? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${mapsQuery}`
	: `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

function PinIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
			<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
			<circle cx="12" cy="10" r="2.25" />
		</svg>
	);
}

function ArrowIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
			<path d="M5 12h13M13 6l6 6-6 6" />
		</svg>
	);
}

export default function LocationPage() {
	return (
		<main className="location-page">
			<section className="location-hero">
				<div className="location-hero__inner">
					<p className="eyebrow">Our office</p>
					<h1>Come find us.</h1>
					<p className="location-hero__copy">
						Good work happens in good company. Drop by for a conversation, a
						coffee, or simply to say hello.
					</p>
				</div>
				<div className="location-hero__stamp" aria-hidden="true">
					<span>OPEN</span>
					<strong>MON - FRI</strong>
					<span>09:00 - 18:00</span>
				</div>
			</section>

			<section className="location-content" aria-label="Company location">
				<div className="map-frame">
					<iframe
						title={`Map showing ${companyLocation}`}
						src={embedUrl}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						allowFullScreen
					/>
					<span className="map-label">EST. 2024 / FIND YOUR WAY</span>
				</div>

				<aside className="location-details">
					<div>
						<p className="eyebrow">Visit us</p>
						<h2>Make your way over.</h2>
					</div>

					<div className="detail-block">
						<span className="detail-icon"><PinIcon /></span>
						<div>
							<p className="detail-label">Address</p>
							<address>{companyLocation}</address>
						</div>
					</div>

					<div className="detail-block">
						<span className="detail-icon detail-icon--clock">12</span>
						<div>
							<p className="detail-label">Office hours</p>
							<p>Monday - Friday<br />09:00 - 18:00</p>
						</div>
					</div>

					<a className="directions-link" href={directionsUrl} target="_blank" rel="noreferrer">
						<span>Get directions</span>
						<ArrowIcon />
					</a>

					<p className="location-note">
						Have a question before visiting? Reach out and we will make sure
						the right person is ready to meet you.
					</p>
				</aside>
			</section>
		</main>
	);
}
