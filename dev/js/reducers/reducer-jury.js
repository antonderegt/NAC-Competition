import { JURY, JURY_SELECTED, JURY_LOAD } from '../actions/actions'

const reducerJury = (state = initialState, action) => {
  switch (action.type) {
    case JURY_SELECTED:
      return Object.assign({}, state, {jurySelected: action.payload})
      break;
    default:
      return state
  }
}

const initialState = {
  juryMembers: [
    {id: 0, name: "T. Van der Linden-Smith (Tina)", descShort: "Docent IT en Recht", descLong: "Dr. Mr. Tina van der Linden-Smith is universitair docent IT en Recht aan de Universiteit Utrecht (zie www.itrecht.nl). Naast het geven van onderwijs begeleidt zij ook studenten bij afstudeerwerken, masterscripties en proefschriften op onderwerpen die op het gebied van IT en Recht liggen. Tevens is zij lid van de redactie van het Tijdschrift voor Internetrecht. Zij maakt al bijna 10 jaar samenvattingen van interessante rechtspraak op het gebied van IT en Recht, die, behalve in het Tijdschrift, ook op de website www.internetrechtspraak.nl gepubliceerd worden.", img: "./images/jury/vdLinden-Smith-min.png"},
    {id: 1, name: "A. Engelfriet (Arnoud)", descShort: "Eigenaar van de blog Ius Mentis", descLong: "Mr.ir. Arnoud Engelfriet is ICT-jurist, gespecialiseerd in internetrecht waar hij zich al sinds 1993 mee bezighoudt. Hij werkt als partner bij juridisch adviesbureau ICTRecht. Zijn site Ius mentis is één van de meest uitgebreide sites van Nederland over internetrecht, techniek en intellectueel eigendom. Sinds 2007 blogt Arnoud dagelijks over internetrecht. Arnoud is medewerker van het Tijdschrift voor Internetrecht en werkt parttime als docent aan de Vrije Universiteit.", img: "./images/jury/engelfriet-min.png"},
    {id: 2, name: "G.J. Zwenne (Gerrit-Jan)", descShort: "Hoogleraar Recht en Informatiemaatschappij", descLong: "Gerrit-Jan Zwenne is hoogleraar recht en de informatiemaatschappij aan de Universiteit Leiden en advocaat bij Brinkhof te Amsterdam. Inmiddels houdt hij zich zo een vijfentwintig jaar bezig met de toepassing en werking van de privacywet- en regelgeving, en met telecom- en internetrechtelijke vraagstukken. Gerrit-Jan geeft colleges, lezingen en cursussen binnen zijn expertisegebieden en publiceert regelmatig over de onderwerpen waarnaar zijn belangstelling uitgaat. Hij is voorzitter van de Nederlandse Vereniging voor IT en Recht (NVvIR); bestuurslid van de Vereniging Privacy Recht (VPR); docent in de VIRA-Grotius opleiding voor ICT-recht advocaten; redacteur en auteur van Tekst & Commentaar Telecom- en privacyrecht (inmiddels 5e druk 2015) en redacteur van de Sdu Monografieën ICT-recht. In 2005 liep hij zijn eerste marathon uit, in Amsterdam.", img: "./images/jury/zwenne-min.png"},
    {id: 3, name: "P.H. Blok (Peter)", descShort: "Raadsheer Gerechtshof", descLong: "Raadsheer Gerechtshof", img: "./images/icon-1x.png"},
    {id: 4, name: "T. Van den Broek (Tanja)", descShort: "Raadsheer Hoge Raad", descLong: "“Mw. Tanja was van 1987-2003 advocaat bij Buruma Maris/Houthoff Buruma. Zij was cassatieadvocaat en behandelde daarnaast zaken op het gebied van het aansprakelijkheids- en contractenrecht. Van 2003-2014 was zij (senior)raadsheer in het gerechtshof Den Haag, eerst in de familiekamer en vanaf 2007 in de handelssector, waar zij zich vooral bezig hield met intellectuele eigendom. Sinds 2014 is mevrouw Tanja raadsheer in de civiele kamer  van de Hoge Raad.”", img: "./images/icon-1x.png"},
    {id: 5, name: "J.E.H.M. Pinckaers", descShort: "Raadsheer Gerechtshof", descLong: "Réjean Pinckaers (1962) heeft rechten gestudeerd in Maastricht, is aldaar gepromoveerd (dissertatie: Artikel 101a RO) en heeft daar rechten gedoceerd tot 1994. Van 1994 tot 2006 was hij advocaat bij Pels Rijcken & Droogleever Fortuijn in onder meer de secties cassatie en landsadvocatuur, vreemdelingenrecht en ruimtelijk bestuursrecht en milieurecht. In 2005 werd hij raadsheer-plaatsvervanger en sinds 2006 is hij raadsheer in het gerechtshof Den Haag in de afdeling Civiel recht. Hij is op dit moment werkzaam in de secties huurrecht en IE.", img: "./images/jury/pinckaers-min.png"},
    {id: 6, name: "A.D. Kiers-Becking", descShort: "Raadsheer Gerechtshof", descLong: "Mr. A.D. (Xandra) Kiers-Becking is na tien jaar als advocaat te hebben gewerkt, overgestapt naar de rechterlijke macht. Zij heeft eerst als rechter in de rechtbank Den Haag gewerkt, onder meer in de kamer die zaken op het gebied van intellectuele eigendom (IE) behandelt. Vanaf 1998 is zij werkzaam als raadsheer en later als vicepresident/senior raadsheer in het gerechtshof Den Haag, sinds 1999 in de kamer die zich bezig houdt met IE-zaken. Zij is lid van diverse overlegorganen op IE-gebied en doceert en spreekt regelmatig over merkenrecht.", img: "./images/jury/kiers-becking-min.png"},
    {id: 7, name: "P.H. Blok", descShort: "Rechter", descLong: "Rechter", img: "./images/icon-1x.png"},
    {id: 8, name: "G.J. Boeve (Gert Jan)", descShort: "Advocaat bij Van Benthem & Keulen", descLong: "Mijn naam is Gert Jan Boeve. Sinds september 2014 ben ik werkzaam als advocaat binnen de praktijkgroep Commercial Contracts & Commercial Litigation van Van Benthem & Keulen te Utrecht. Het grootste deel van mijn praktijk bestaat uit procederen. Ik heb daarom met regelmaat zittingen bij de rechtbanken en de gerechtshoven. Tijdens mijn rechtenstudie ben ik lid geweest van Pleitgenootschap Eggens. Ook na mijn rechtenstudie ben ik actief mee blijven doen aan pleitwedstrijden voor advocaten, waaronder de Plaatselijke Pleitwedstrijden te Utrecht en de Landelijke Pleitwedstrijd, die jaarlijks plaatsvindt in de rechtbank te Utrecht. Ik waardeer het dan ook zeer dat ik door de commissie ben uitgenodigd om te jureren tijdens Nationaal Appèlconcours van 2017!", img: "./images/jury/boeve-min.png"},
    {id: 9, name: "F. Douwenga (Fenna)", descShort: "Advocaat bij Bird & Bird", descLong: "Advocaat bij Bird & Bird", img: "./images/icon-1x.png"},
    {id: 10, name: "R. Bloemink", descShort: "Advocaat", descLong: "Advocaat", img: "./images/icon-1x.png"},
    {id: 11, name: "W.J. Ausma", descShort: "Advocaat", descLong: "Advocaat", img: "./images/icon-1x.png"}
  ],
  jurySelected: {id: 0, name: "T. Van der Linden-Smit (Tina)", descShort: "Academici", descLong: "Academici", img: "./images/icon-1x.png"}
}

export default reducerJury
