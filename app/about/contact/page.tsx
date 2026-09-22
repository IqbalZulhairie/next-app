"use client";

import { FormEvent, useState } from "react";

const contactEmail = "hello@nexoralabs.dev";

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSubmitted(true);
	}

	return (
		<main className="contact-page">
			<section className="contact-hero">
				<div>
					<p className="eyebrow">Start a conversation</p>
					<h1>Let&apos;s make something matter.</h1>
					<p className="contact-hero__copy">
					Tell us about your website, app, or digital product. We&apos;ll get
					back to you within two business days with a clear next step.
					</p>
				</div>
				<div className="contact-hero__mark" aria-hidden="true">HELLO<span>↗</span></div>
			</section>

			<section className="contact-content">
				<div className="contact-form-wrap">
					<div className="contact-section-heading">
						<p className="eyebrow">The short version</p>
						<h2>What can we help with?</h2>
					</div>

					{submitted ? (
						<div className="contact-success" role="status">
							<span className="contact-success__number">01</span>
							<h3>Message received.</h3>
							<p>Thanks for reaching out. We&apos;ll be in touch soon.</p>
							<button type="button" onClick={() => setSubmitted(false)}>
								Send another message
							</button>
						</div>
					) : (
						<form className="contact-form" onSubmit={handleSubmit}>
							<label>
								<span>Your name</span>
								<input name="name" type="text" placeholder="Jane Smith" required />
							</label>
							<label>
								<span>Email address</span>
								<input name="email" type="email" placeholder="jane@company.com" required />
							</label>
							<label>
								<span>What are you working on?</span>
								<select name="topic" defaultValue="">
									<option value="" disabled>Select a topic</option>
									  <option>Web development</option>
									  <option>Mobile app development</option>
									  <option>Product design and strategy</option>
									  <option>Cloud and technical support</option>
									  <option>Something else</option>
								</select>
							</label>
							<label>
								<span>Tell us a little more</span>
								<textarea name="message" placeholder="A few words about your project..." rows={5} required />
							</label>
							<button className="contact-submit" type="submit">
								<span>Send inquiry</span>
								<span aria-hidden="true">↗</span>
							</button>
						</form>
					)}
				</div>

				<aside className="contact-aside">
					<div className="contact-aside__block">
						<p className="detail-label">Prefer email?</p>
						<a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
					</div>
					<div className="contact-aside__block">
						<p className="detail-label">Find us</p>
						<p>Manila, Philippines<br />Monday - Friday, 09:00 - 18:00</p>
						<a className="contact-text-link" href="/location">View our location <span>↗</span></a>
					</div>
					<div className="contact-aside__note">
						<span>02</span>
						<p>Small questions are welcome. You don&apos;t need a polished brief to get started.</p>
					</div>
				</aside>
			</section>
		</main>
	);
}
