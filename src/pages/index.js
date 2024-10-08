import * as React from "react";
import { Helmet } from "react-helmet";
import engPdfModel from "../assets/eng_gtorrisi_model.pdf";
import engPdfRules from "../assets/eng_gtorrisi_rules.pdf";
import itaPdfModel from "../assets/ita_gtorrisi_model.pdf";
import itaPdfRules from "../assets/ita_gtorrisi_rules.pdf";
import sponsors from "../assets/sponsors";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { NavProvider } from "../context/NavContext";
import chitarra from "../images/chitarra.svg";
import "./index.scss";

const IndexPage = () => {
  return (
    <NavProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Pagina ufficiale di promozione del Concorso musicale Giuseppe Torrisi. Concorso chitarristico con sede a Catania in memoria del maestro Giuseppe Torrisi."
        />
        <meta name="google-site-verification" content="" />
        <meta
          name="keywords"
          content="concorso musicale giuseppe torrisi chitarra classica musica concerto catania maestro"
        />
        <title>Concorso Musicale Giuseppe Torrisi</title>
      </Helmet>
      <Navbar />
      <main className="home">
        <h1 className="home__title text-center lg:text-left mt-28 mb-10">
          Concorso Musicale "Giuseppe Torrisi"
        </h1>
        <div className="flex justify-between px-5 pb-10 lg:px-48">
          <div className="home__hero lg:w-2/3" id="hero-section">
            <p className="my-5 text-left">
              Terza edizione del concorso musicale aperto ai Giovani
              Chitarristi, Ensemble di Chitarre (dal duo in poi) e Musica da
              camera con chitarra, archi, fiati,legni o strumenti a pizzico in
              qualsiasi formazione.
            </p>
            <p>
              Si svolge a Catania l'8 e il 9 Novembre 2024 presso <a href="https://maps.app.goo.gl/GEauNDXJBoGTtHAa6" target="_blank">l’Auditorium Carlo Alberto Dalla Chiesa, Vico Mignemi, S. Gregorio (CT)</a>.
            </p>
            <div className="download_links mt-10">
              <h2 className="title mb-5">Scarica il regolamento:</h2>

              <a href={itaPdfRules} download className="">
                Regolamento italiano
              </a>
              <a href={engPdfRules} download className="">
                Rules in English
              </a>
            </div>
            <div className="download_links mt-10">
              <h2 className="title mb-5">
                Scarica la domanda di partecipazione:
              </h2>
              <a href={itaPdfModel} download className="">
                Domanda di partecipazione italiano
              </a>
              <a href={engPdfModel} download className="">
                English Application form
              </a>
            </div>
            <div className="flex flex-col mt-20">
              <h3 className="title mb-10" id="sponsors">
                Sponsors
              </h3>
              <div className="flex flex-wrap gap-3">
                {sponsors.map(({ link, img, name }) => (
                  <a href={link} target="_blank" rel="noreferrer" key={name}>
                    <img src={img} alt={name} className="sponsors__image" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <img
            src={chitarra}
            alt="chitarra"
            className="chitarra hidden lg:block"
          />
        </div>
        <Footer />
      </main>
    </NavProvider>
  );
};

export default IndexPage;
