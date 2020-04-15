import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/sahara.jpg"
const Point25 = () => {
    return (
    <React.Fragment>
      <p>
      North African climate cycles have a unique history that can be traced back millions of years. The cyclic climate pattern of the Sahara is characterized by significant shifts in the strength of the North African Monsoon. When the North African Monsoon is at its strongest, annual precipitation and consequently vegetation in the Sahara region increase, resulting in conditions commonly referred to as the "green Sahara". For a relatively weak North African Monsoon, the opposite is true, with decreased annual precipitation and less vegetation resulting in a phase of the Sahara climate cycle known as the "desert Sahara".
Variations in the climate of the Sahara region can, at the simplest level, be attributed to the changes in insolation because of slow shifts in Earth's orbital parameters. The parameters include the precession of the equinoxes, obliquity, and eccentricity as put forth by the Milankovitch theory. The precession of the equinoxes is regarded as the most important orbital parameter in the formation of the "green Sahara" and "desert Sahara" cycle. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="SAHARA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point25;

