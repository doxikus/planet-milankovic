import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/biwa.jpg"
const Point7 = () => {
    return (
    <React.Fragment>
      <p>Francuski istraživači, koji su 1990. ispitivali slojeve pepela u sedimentnim jezgrima Mediterana, izvijestili su o iznenađujućem nalazu: izgleda kao da se i vulkanska aktivnost pojačava u pravilnim razmacima od 23.000 godina. Michael Rampino i njegov kolega Ken Caldeira otkrili su dokaze u jezeru Biwa, u Japanu, da se vulkanska aktivnost pojačava svakih 100.000 godina, što je najduži Milankovićev ciklus i interval između hladnih maksimuma najjačih ledenih perioda.
</p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="JEZERO BIWA, JAPAN" fluid />
      

    </React.Fragment>
    )
  }

  export default Point7;

