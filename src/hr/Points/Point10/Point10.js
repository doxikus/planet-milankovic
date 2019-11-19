import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/bajkal.jpg"
const Point10 = () => {
    return (
    <React.Fragment>
      <p>
      U sedimentnim zapisima biogenog silicij-dioksida iz Bajkalskog jezera nađeni su signali svih
Milankovićevih ciklusa. Naročito je jak signal ciklusa promjene nagiba Zemljine osi rotacije u
periodu između 1,8 i 0,8 milijuna godina unazad; utjecaj 100.000 godina dugog ciklusa
promjene ekscentričnosti raste tijekom posljednjih 0,8 milijuna godina. Očekivana frekvencija
precesije od 23.000 godina je najviša tijekom posljednjih 400.000 godina.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="ZAPIS U BIOGENOM SILICIJ-DIOKSIDU IZ BAJKALSKOG JEZERA U JUŽNOM
SIBIRU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point10;

