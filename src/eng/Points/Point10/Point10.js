import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/bajkal.jpg"
const Point10 = () => {
    return (
    <React.Fragment>
      <p>
      In the sedimentary record of biogenic silica from Lake Baikal in south-central Siberia was found signal of all Mijlankovitch’s cycles. The 41,000-year obliquity cycle is particulary strong from 1.8 to 0.8 million years ago; variance in the 100,000-year eccentircity band increases during the past 0.8 million years. The expected precession frequency of 23,000 years is highest during the past 400,000 years.

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="ZAPIS U BIOGENOM SILICIJ-DIOKSIDU IZ BAJKALSKOG JEZERA U JUŽNOM
SIBIRU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point10;

