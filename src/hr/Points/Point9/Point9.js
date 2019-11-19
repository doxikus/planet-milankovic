import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/henderson.jpg"
const Point9 = () => {
    return (
    <React.Fragment>
      <p>
      Suha klima otoka Henderson neobično povoljno utječu na očuvanje fosila. Fosilizirani
koraljni grebeni ovdje su pružili dokaze o smjeni ledenih i toplih klimatskih perioda.
Proučavanja su pokazala da je visoki nivo mora prije 80.000, 105.000 i 125.000 godina nastao
uzajamnim djelovanjem promjene ekscentričnosti i promjene nagiba Zemljine osi. Prividna
proturječnost u proračunu vremena glacijacije od prije 127.000 godina riješena je metodom
uranijskog datiranja koraljnih grebena, što je pokazalo potpunu suglasnost s Milankovićem.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="KORALJNI GREBENI NA OTOKU HENDERSON" fluid />
      

    </React.Fragment>
    )
  }

  export default Point9;

