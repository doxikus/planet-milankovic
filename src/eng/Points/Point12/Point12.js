import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/pacific.png"
const Point12 = () => {
    return (
    <React.Fragment>
      <p>
      The data comes from a borehole in the Pacific Ocean, just north of the equator: Nicholas Shackleton, with André Berger from the Catholic University of Louvain and the University of Toronto found that the sediment record picks up the Milankovitch cycles very accurately and gave a consistent chronology.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="BUŠOTINA U TIHOM OCEANU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point12;

