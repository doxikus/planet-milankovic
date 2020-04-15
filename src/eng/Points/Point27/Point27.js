import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/sanbao.jpg"
const Point27 = () => {
    return (
    <React.Fragment>
      <p>
      Oxygen isotope records from Chinese caves characterize changes in both the Asian monsoon and global climate. Here, using our new speleothem data from Sanbao cave, the Chinese record is extended to cover the past 640,000 years. The record's length and temporal precision allow us to test the idea that insolation changes caused by the Earth's precession drove the terminations of each of the last seven ice ages as well as the millennia-long intervals of reduced monsoon rainfall associated with each of the terminations. Тhe terminations are separated by four or five precession cycles, supporting the idea that the '100,000-year' ice age cycle is an average of discrete numbers of precession cycles.These observations indicate that Milankovitch insolation forcing, in part, sets the pace of the occurrence of millennial-scale events, including those associated with terminations and 'unfinished terminations'.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="PEĆINA SANBAO, KINA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point27;

