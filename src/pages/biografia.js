import * as React from "react";
import "./index.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { NavProvider } from "../context/NavContext";
import { Helmet } from "react-helmet";
import bio1 from "../images/bio1.jpeg";
import bio2 from "../images/bio2.jpeg";
import bio3 from "../images/bio3.jpeg";
import bio4 from "../images/bio4.jpeg";

const BioPage = () => {
  return (
    <NavProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Biografia del maestro Giuseppe Torrisi. Concorso chitarristico con sede a Catania in memoria del maestro Giuseppe Torrisi."
        />
        <meta name="google-site-verification" content="" />
        <meta
          name="keywords"
          content="concorso musicale giuseppe torrisi chitarra classica musica concerto catania maestro"
        />
        <title>Il maestro Giuseppe Torrisi - Biografia</title>
      </Helmet>
      <Navbar />
      <main className="home">
        <div className="home__hero bio py-20" id="hero-section">
          <a href="/" className="px-5">
            Indietro
          </a>
          <h1 className="home__title mt-22 px-5 text-center lg:text-left">
            Giuseppe Torrisi
          </h1>
          <div className="flex flex-col px-5 lg:flex-row justify-between">
            <p className="py-5">
              Nato a Catania il 25 agosto del 1958, ha studiato chitarra
              classica da autodidatta conseguendo il Diploma nel 1986 presso il
              Conservatorio di musica "Tito Schipa" di Lecce. Ha partecipato a
              diversi corsi di perfezionamento tenuti da insigni Maestri di fama
              internazionale tra i quali A. Diaz, R. Chiesa ed A. Minella. Dal
              1983 collabora con l'E.A.R - Teatro Massimo Bellini di Catania per
              la realizzazione di opere liriche, balletti e concerti sinfonici
              tra cui "Bozzetto Siciliano", lavoro teatrale del compositore
              Sylvano Bussotti andato in scena nel 1990 in prima esecuzione
              mondiale assoluta. È stato inoltre scritturato in varie occasioni
              anche come mandolinista (ad. es. nel "Don Giovanni" di W. A.
              Mozart), come professore di banjo (in alcuni lavori di G.
              Gershwin) ed anche come solista di bouzouki nel balletto "Zorba il
              Greco" di M. Theodorakis e di charango nella "Misa Criolla" di
              Ariel Ramirez. Ultimamente ha collaborato con L'Orchestra del
              Teatro Bellini nel balletto "Romeo e Giulietta"di S. Prokoviev in
              qualità di mandolinista, in "Winterreise"di Schubert nel gennaio
              2011 (arr. Zender ) e nel "Barbiere di Siviglia" nel maggio 2011
              come chitarrista.
            </p>
            <img
              src={bio1}
              className="m-auto lg:m-0 lg:ml-10"
              alt="giuseppe torrisi"
            />
          </div>
          <div className="flex flex-col px-5 lg:flex-row justify-between">
            <img
              src={bio2}
              className="m-auto lg:m-0 lg:mr-10"
              alt="giuseppe torrisi"
            />

            <p className="py-5">
              {" "}
              Ha partecipato a varie trasmissioni radiofoniche e televisive e
              nel 1986 gli è stato assegnato il "Premio speciale per lo
              Spettacolo". E' autore di numerose trascrizioni ed arrangiamenti
              per chitarra e nel 1999 ha inciso un CD ("Dalla Sicilia al
              Sud-America...") proponendo delle personali rivisitazioni
              chitarristiche di celebri melodie in un immaginario viaggio
              musicale attraverso varie culture popolari. Il CD è disponibile
              gratuitamente e scaricabile in formato mp3 collegandosi ai siti
              internet: www.chitarrarte.it www.guitarfreescores.com Siti che
              oggi sono curati e gestiti dalla famiglia dell’ Artista. Su queste
              pagine web ha pubblicato numerose partiture ed arrangiamenti per
              chitarra classica disponibili in varie sezioni per diversi livelli
              di difficoltà e che sono disponibili gratuitamente, oltre a mp3 e
              video musicali relativi alla sua attività artistica e
              professionale.{" "}
            </p>
          </div>
          <div className="flex flex-col px-5 lg:flex-row justify-between">
            <p className="py-5">
              Tra il 2002 e il 2004 è stato invitato a tenere dei Concerti in
              Romania e in Germania ottenendo ampi riscontri da parte di
              pubblico e critica. Parallelamente alla attività di solista ha
              collaborato con diverse formazioni musicali alla riscoperta e
              valorizzazione delle tradizioni popolari musicali della Sicilia.
              Tra queste l' "Ensemble a plettro Siciliano", i "Siculae Res" e
              gli "Armòs", gruppo vocale - strumentale caratterizzato dall'uso
              esclusivo di strumenti d'epoca quali il liuto, la vihuela, il
              chitarrino etc. Ha fatto parte dei "Flam.& Co.", gruppo
              strumentale che percorre un itinerario musicale attraverso la
              cultura latina e le sue derivazioni e con il quale ha inciso il CD
              "Ondanuova" pubblicato dalla prestigiosa Casa Editrice Musicale
              "Carosello Records" di Milano. Ha fatto anche parte del gruppo
              vocale - strumentale "Voce 'e Popolo"che, attraverso dei ricercati
              arrangiamenti strumentali, propone delle particolari rivisitazioni
              di celeberrime melodie della tradizione popolare siciliana e
              napoletana. Insieme ai chitarristi Michele Gagliano e Massimo
              Genovese ha fondato il "Trio 18 Corde" col quale ha realizzato un
              CD comprendente arrangiamenti di famosi brani classici e popolari.
            </p>{" "}
            <img
              src={bio3}
              className="m-auto lg:m-0  lg:ml-10"
              alt="giuseppe torrisi"
            />
          </div>
          <div className="flex flex-col px-5 lg:flex-row justify-between">
            <img
              src={bio4}
              className="m-auto lg:m-0 lg:mr-10"
              alt="giuseppe torrisi"
            />
            <p className="py-5">
              {" "}
              Di rinomata importanza ricordiamo il gruppo "Sinfonia
              Mediterranea", nel quale ha collaborato con musicisti di elevato
              spessore artistico-musicale, tra tutti ricordiamo la soprano
              Daniela Rossello, il contrabbassista Marco Carnemolla, alle
              percussioni Riccardo Gerbino, ed il cantante partenopeo Pasquale
              Zinno; il Duo di Chitarra e Voce con la soprano Vera Garozzo. Ha
              inoltre svolto un’ intensa operosita' didattica attraverso la
              quale ha già avviato diversi allievi all'attivita'artistica e
              professionale. Ha ricoperto il ruolo di Docente di chitarra presso
              numerose scuole del territorio catanese, la sua ultima scuola è
              stata la Scuola Media ad Indirizzo Musicale "Raffaello Sanzio" di
              Tremestieri Etneo (CT). Il Maestro ci lascia improvvisamente il 30
              gennaio 2021. Oltre ad essere uno tra i più prolifici nonché
              brillanti arrangiatori per chitarra classica del territorio
              nazionale nonché dell’intero web, ricercatissimo anche da artisti
              famosi come Al Di Meola, Giuseppe Torrisi si è dedicato alla
              composizione di suoi pezzi personali, interpretati dai più
              rinomati artisti contemporanei della chitarra classica; il suo
              canale YouTube, attivo e gestito ad oggi dalla sua famiglia
              attraverso l’Associazione Culturale, Musicale Giuseppe Torrisi,
              ancora oggi conta più di 38.700 iscritti.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </NavProvider>
  );
};

export default BioPage;
