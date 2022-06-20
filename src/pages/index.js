import * as React from "react";
import "./index.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { NavProvider } from "../context/NavContext";
import { Helmet } from "react-helmet";

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
        <div className="home__hero" id="hero-section">
          <h1 className="home__title mt-28">
            Concorso Musicale "Giuseppe Torrisi"
          </h1>
          <p>
            Concorso musicale aperto ai Giovani Chitarristi, Ensemble di
            Chitarre (dal duo in poi) e Musica da camera con chitarra, archi,
            fiati,legni o strumenti a pizzico in qualsiasi formazione.
          </p>
          <p>
            Si svolge a Catania dal 23 al 25 Settembre 2022 presso l’Auditorium
            Sacro Cuore di via Milano - Catania.
          </p>
          <div className="download_links">
            <h2 className="title mb-2">Scarica il regolamento:</h2>
            <a href="#" download className="">
              Regolamento italiano formato word
            </a>
            <a href="#" download className="">
              Regolamento italiano formato pdf
            </a>
            <a href="#" download className="">
              Regolamento english word
            </a>
            <a href="#" download className="">
              Regolamento english pdf
            </a>
            <a href="#" download className="">
              Regolamento deutsch word
            </a>
            <a href="#" download className="">
              Regolamento deutsch pdf
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </NavProvider>
  );
};

export default IndexPage;
