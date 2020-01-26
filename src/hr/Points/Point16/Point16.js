import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/south-indian-ocean.jpg"
const Point16 = () => {
    return (
    <React.Fragment>
      <p>
      Geološki podaci obuhvaćaju rezultate mjerenja tri klimatski osjetljiva parametra u dva jezgra iz bušotina dubokomorskih sedimenata. Ta jezgra su uzeta u oblasti (u južnom dijelu Indijskog oceana) gdje su raniji radovi pokazali da se sedimenti talože dovoljno brzo da mogu sačuvati informaciju o učestalostima koje nas zanimaju. Mjerili smo (1) δ18O, sadržaj izotopa kisika u planktonskim foraminiferama, (2) Ts, procjenu ljetnje temperature morske površine na mjestu bušenja, dobijenu statističkom analizom populacije radiolarija; i (3) procenat zastupljenosti Cycladophora davisiana, relativni sadržaj ove vrste radiolarije koja nije korištena prilikom određivanja Ts. Iz oba jezgra, radi analize na svakih 10 cm, uzimani su identični uzorci. Zaključeno je da su promjene u geometriji Zemljine orbite temeljni uzrok smjene ledenih doba tokom Kvartara. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="JUŽNI INDIJSKI OCEAN" fluid />
      

    </React.Fragment>
    )
  }

  export default Point16;

