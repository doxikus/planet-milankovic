import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/henderson.jpg"
const Point9 = () => {
    return (
    <React.Fragment>
      <p>
      The evidence of the occurrence of climatic cycles provided by corals reefs in the Henderson Island is reported. Importance of coral reefs for geological evaluations; Benefit of the island's dry climate in fossil preservation; Confirmation of the Milankovitch theory of glacial and interglacial periods.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="KORALJNI GREBENI NA OTOKU HENDERSON" fluid />
      

    </React.Fragment>
    )
  }

  export default Point9;

