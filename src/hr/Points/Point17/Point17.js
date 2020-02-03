import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/newark-basin.jpg"
const Point17 = () => {
    return (
    <React.Fragment>
      <p>
      Geolozi su pretpostavljali da uzorci pronađeni u Njuarškom basenu, drevnom riftnom basenu koji pokriva sjeverni New Jersey, jugoistočnu Pensilvaniju i južni New York, možda odražavaju klimatske efekte predviđenog Milankovićevog ciklusa dugog 405 000 godina, ali se starost sedimenata iz ovog basena do sada nije mogla dovoljno precizno odrediti da bi se ta povezanost mogla dokazati. Znanstvenici iz Lamont-Doherty opservatorije Kolumbijskog sveučilišta uspjeli su da datiraju njuarške stijene upoređujući tragove obrtanja magnetnih polova sa istim tragovima u precizno datiranim jezgrima bušotina izvađenih u Nacionalnom parku Kamena šuma u Arizoni.
Dobro očuvana sekvenca jezerskih sedimenata iz trijasa, koja sadrži tragove klimatskih promjena u Njuarškom basenu potvrđuje postojanje Milankovićevog ciklusa dužine 405 000 godina – periodičnu promjenu oblika Zemljine orbite izazvanu Zemljinom gravitacijskom interakcijom sa Jupiterom i Venerom.  Drugi Milankovićevi ciklusi – cilklus precesije, dug 23 000 godina, ciklus promjene nagiba osi, dug 41 000 godina, i 100 000 godina dug ciklus povezan sa ekscentričnošću orbite su relativno dobro odraženi i potvrđeni u geološkim i sedimentnim zapisima.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="Newark Basin, USA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point17;

