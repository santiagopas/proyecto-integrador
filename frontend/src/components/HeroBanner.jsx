import '../styles/components/HeroBanner.css'

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <figure>
        <img
          src="https://media.istockphoto.com/id/1417996387/es/foto/guitarras-el%C3%A9ctricas-colgadas-en-la-tienda.jpg?s=612x612&w=0&k=20&c=lpLc_JKnYtVuqWH-TRtXIeq7gf9s_wK2Fd0KYEXuyUc="
          alt="banner"
          className="hero-banner__image"
        />
      </figure>
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">Song 2</h1>
        <p className="hero-banner__description">Instrumentos musicales.</p>
        <button className="hero-banner__button">Ver más</button>
      </div>
    </section>
  );
};

export default HeroBanner;
