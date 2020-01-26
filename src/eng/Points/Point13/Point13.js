import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/south-australian-ridge.jpeg"
const Point13 = () => {
    return (
    <React.Fragment>
      <p>
      The explanation of the Pleistocene glaciations in terms of secular variations of the Earth’s orbital elements, the Milankovitch theory, has recently gained considerable support. The South Australian ridge sequence was dated by polarity reversal, and concluded that it contains components related to the Earth orbital elements. Exept for the dominance of the 100,000-yr component and its phase relative to the eccentricity variations, the ridge evidence is consistent with the Milankovitch theory. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="SOUTH AUSTRALIAN RIDGE" fluid />
      

    </React.Fragment>
    )
  }

  export default Point13;

