import * as React from "react";
import "./index.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { NavProvider } from "../context/NavContext";
import { Helmet } from "react-helmet";
import chitarra from "../images/chitarra.svg";

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
              Concorso musicale aperto ai Giovani Chitarristi, Ensemble di
              Chitarre (dal duo in poi) e Musica da camera con chitarra, archi,
              fiati,legni o strumenti a pizzico in qualsiasi formazione.
            </p>
            <p>
              Si svolge a Catania dal 23 al 25 Settembre 2022 presso
              l’Auditorium Sacro Cuore di via Milano - Catania.
            </p>
            <div className="download_links mt-10">
              <h2 className="title mb-5">Scarica il regolamento:</h2>
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
          <img src={chitarra} alt="chitarra" className="chitarra" />
        </div>
        <Footer />
      </main>
    </NavProvider>
  );
};

export default IndexPage;
