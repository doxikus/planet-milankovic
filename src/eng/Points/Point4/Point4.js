import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/bahamas.jpg"
const Point4 = () => {
    return (
    <React.Fragment>
      <p>
      Wallace Broeker at the beginning of 60s (ХХ century) explored the age of the fossile reefs. He discovered that besides present times the sea level also rise significantly 80,000 and 120,000 years ago. That correspondes to three of four maximums at Milankovitch’s Curve of Insolation.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="KORALJNE TERASE NA BARBADOSU" fluid />
    </React.Fragment>
    )
  }

  export default Point4;

