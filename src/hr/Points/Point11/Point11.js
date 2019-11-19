import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/moorewille.jpg"
const Point11 = () => {
    return (
    <React.Fragment>
      <p>
      Spektralnom analizom uzoraka uzetih iz debelih naslaga drvenog ugljena u sjeveroistočnom
dijelu Meksičkog zaljeva, lokalitet Mooreville, u kojima se na decimetarskim rastojanjima
smjenjuju slojevi ugljena i laporca, uočene su tri Milankovićeve frekvencije (ekscentričnost,
promjena nagiba osi i precesija). Naročito su upadljivi utjecaji ciklusa promjene
ekscentričnosti i promjene nagiba osi.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="MILANKOVIĆEVI CIKLUSI U UGLJENU U SJEVEROISTOČNOJ OBLASTI
MEKSIČKOG ZALJEVA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point11;

