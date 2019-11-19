import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/nigata.jpg"
const Point8 = () => {
    return (
    <React.Fragment>
      <p>
      Sedimentological and mathematical analysis of the Neogene turbidite succession along the Gomoto River through the Western oil belt in the Niigata Neogene sedimentary basin, central Japan The periodicity of the cyclic variation recognized in the number and total thickness of the turbidite sandstone beds intercalated in the specific thickness of the hemipelagic mudstone, i.e. 100,000 and more years, may reflect the Milankovitch cycles.

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="NEOGENSKI NIGATA BAZEN U SREDIŠNJEM JAPANU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point8;

