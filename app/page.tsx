import Link from "next/link";

const services = [
  { number: "01", title: "Web development", text: "Fast, accessible websites and platforms built for real business goals." },
  { number: "02", title: "Mobile applications", text: "Reliable iOS and Android experiences that keep customers connected." },
  { number: "03", title: "Product engineering", text: "From first prototype to scalable product, we turn ideas into software." },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="eyebrow">Software house / Manila + remote</p>
          <h1>We build the software that moves business forward.</h1>
          <p className="home-hero__copy">
            Nexora Labs partners with ambitious teams to design, develop, and
            scale websites, mobile apps, and digital products people rely on.
          </p>
          <div className="home-actions">
            <Link className="home-button home-button--dark" href="/about/contact">
              Start a project <span aria-hidden="true">↗</span>
            </Link>
            <Link className="home-text-link" href="/about">Explore our work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="home-hero__signal" aria-hidden="true">
          <span>CODE</span><strong>+</strong><span>CLARITY</span>
        </div>
      </section>

      <section className="home-services">
        <div className="home-section-intro">
          <p className="eyebrow">What we do</p>
          <h2>Technology with a point of view.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span>{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-statement">
        <p className="eyebrow">Built for the next step</p>
        <h2>Good software should feel simple, even when the problem is complex.</h2>
        <Link className="home-button home-button--light" href="/about/contact">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
