import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/italian-dolomite.jpeg"
const Point24 = () => {
    return (
    <React.Fragment>
      <p>
      The Latemar massif in the Italian Dolomites was an atoll-like feature with a core of flat-lying Anisian and Ladinian platform carbonates. Oscillations in sea level were created over 500 thin depositional cycles). Stacking patterns and spectral analysis of the sea-level oscillations had been interpreted in the frame of Milankovitgch theory as representing precession modulated by short-term (100 kyr) eccentricity, therefore yielding an implication that the Latemar deposit spans approximately 10 myr.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="TALIJANSKI DOLOMITI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point24;

