import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/baoji.jpg"
const Point21 = () => {
    return (
    <React.Fragment>
      <p>
      Analizirana je veličina zrnaca lesa na Baoji profilu u intervalima od 10 cm. Promjena veličine lesnih čestica tumači se kao rezultat promjena u intenzitetu zimskih monsunskih vjetrova iz Sibira izazvanih cikličnim izmjenama ledenih i međuledenih perioda. Podatci o veličini čestica su poslužili kao lokalni pokazatelj strujanja zimskih monsuna, i upoređeni su sa Milankovićevim orbitalnim varijacijama koje su Berger i Loutre izračunali 1991. godine, uz kontrolu putem podataka o obrtanju magnetnih polova.  Utvrđeno je sljedeće: (1) komponente precesije i nutacije izdvojene iz podataka o veličini čestica na orbitalnoj vremenskoj skali veoma dobro se slažu sa teorijskim orbitalnim podatcima (2) postoji bliska koherentnost između vremenske skale određene veličinom Baoji čestica i orbitalnih varijacija tokom čitavog perioda od 0-2,5 milijuna godina.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="BAOJI LESNI PROFIL, KINA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point21;

