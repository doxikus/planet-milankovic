import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/biwa.jpg"
const Point7 = () => {
    return (
    <React.Fragment>
      <p>
      In 1990, French researchers who had examined ash layers in a sediment core from the Mediterranean Sea reported a startling result: the volcanic activity seemed to have occurred in regular bursts, every 23,000 years. Michael Rampino and his colleague Ken Caldeira have discovered evidence, in Lake Biwa, Japan, for volcanic activity every 100,000 years--which is the longest Milankovitch cycle and the interval between the peaks of major ice ages. The effect would be like popping a champagne cork: the molten rock would rise up through the volcano and erupt. In this scenario, whenever the Milankovitch cycles cool Earth enough for ice sheets to grow, the planet's coastal and island volcanoes would celebrate.

</p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="JEZERO BIWA, JAPAN" fluid />
      

    </React.Fragment>
    )
  }

  export default Point7;

