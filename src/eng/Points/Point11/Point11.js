import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/moorewille.jpg"
const Point11 = () => {
    return (
    <React.Fragment>
      <p>
      A thick chalk section was deposited in the northeastern Gulf of Mexico area during the Campanian Stage. The lower part of the Campanian chalk section consists of the Mooreville Chalk. Decimeter scale chalk/marl cycles are well developed in this section. Walsh Transforms were conducted on the chalk/marl cycles from a core of the Mooreville section in Dallas County, Alabama. Three Milankovitch frequencies (eccentricity, obliquity and procession) were identified from the resulting power spectra. The eccentricity band and obliquity band are very prominent throughout the section.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="MILANKOVIĆEVI CIKLUSI U UGLJENU U SJEVEROISTOČNOJ OBLASTI
MEKSIČKOG ZALJEVA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point11;

