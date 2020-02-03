import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/climap.png"
const Point16 = () => {
    return (
    <React.Fragment>
      <p>
      Tokom 500 000 godina glavne klimatske promjene pratile su oscilacije nagiba Zemljine ose i precesije. Od nekoliko stotina jezgara podvrgnutih stratigrafskoj analizi u okviru CLIMAP projekta, odabrana su dva (RC1 1-120 i E49-18), čije su ih lokacije i svojstva činile idealnim za testiranje orbitalne hipoteze. Geološki podatci obuhvatili su rezultate mjerenja tri klimatski osjetljiva parametra u dva jezgra iz bušotina dubokomorskih sedimenata. Ta jezgra su uzeta u oblasti (u južnom dijelu Indijskog oceana) gdje su raniji radovi pokazali da se sedimenti talože dovoljno brzo da mogu sačuvati informaciju o učestalostima. Mjereni su (1) δ18O, sadržaj izotopa kisika u planktonskim foraminiferama, (2) Ts, procjena ljetnje temperature morske površine na mjestu bušenja, dobijenu statističkom analizom populacije radiolarija; i (3) postotak zastupljenosti Cycladophora davisiana, relativni sadržaj ove vrste radiolarije koja nije korištena prilikom određivanja Ts. Iz oba jezgra su, radi analize, na svakih 10 cm uzimani identični uzorci. Zaključeno je da su promjene u geometriji Zemljine orbite, odnosno Milankovićevi ciklusi temeljni uzrok smjene ledenih doba tijekom Kvartara.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="Projekat CLIMAP – južni Indijski ocean" fluid />
      

    </React.Fragment>
    )
  }

  export default Point16;

