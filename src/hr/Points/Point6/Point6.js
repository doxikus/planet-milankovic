import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/vostok.jpg"
const Point6 = () => {
    return (
    <React.Fragment>
      <p>Ruski i francuski znanstvenici na Vostoku, istraživsačkoj stanici na Antarktici, počevši od 1980. godine, počeli su da vade vertikalni valjkasti uzorak promjera 10 centimetara, bušeći u dubinu leda,  a time i u dubonu vremena. Tijekom osamnaest godina probili su se do dubine od 3,7 kilometara, čime su dobili najduži ledeni uzorak na svijetu. Od vrha do dna, gdje je zrak star 420 tisuća godina – ili tri ledena doba – uzorak je prenosio istu poruku. Milankovićev ciklus s peridom od 100 tisuća godina veoma se dobro slaže s vremenima nastnaka velikih zahlađenja.
</p>
      <p>Podatci sa stanice Vostok, „produženi“ na četiri klimnatska ciklusa, pokazali su da su orbitalne frekvencije izrazito utisnute u sve zapise, s dominacijom ciklusa od 100.000 godina, osim promjena koncentraija izotopa 18O, kojima dominira precesija. Izražen je i utjecaj promjene nagiba Zemljine osi na temperaturu, što je vjerojatno povezano s lokalnim vremenima osunčavanja. Utvrđena je i poveznost plinova staklene bašte i klime, koja naznačuje da su ti plinovi važni kao pojačivači inicijalnog orbitalnog utjecaja. 
</p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="ISTRAŽIVAČKA STANICA VOSTOK NA ANTARKTICI" fluid />
    </React.Fragment>
    )
  }

  export default Point6;

