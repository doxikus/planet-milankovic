import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/climap.png"
const Point16 = () => {
    return (
    <React.Fragment>
      <p>
      For 500,000 years, major climatic changes have followed variations in obliquity and precession. From several hundred cores studied stratigraphically by the CLIMAP project, it is selected two (RC1 1-120 and E49-18) whose locations and properties make them ideal for testing the orbital hypothesis. Our geological data comprise measurements of three climatically sensitive parametars in those two deep-sea sediment cores. These cores were taken from an area (in the southern Indian Ocean) where previous works shows that sediment is accumulating fast enough to preserve information at the frequencies of interest. It was measured (i) δ18O, the oxygen isotopic composition of planctonic foraminifera; (ii) Ts, an estimate of summer sea-surface temperatures at the core site, derived from a statistical analysisi of radiolarian assemblages; and (iii) percentage of Cycladophora davisiana, the relative abundance of a radiolarian species not used in the estimation of Ts. Identical samples were analyzed for the three variables at 10-cm intervals through each core. It is concluded that changes in the Earth’s orbital geometry according to Milankovitch’s cycles are the fundamental cause of the succesion of Quaternary ice ages. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="SOUTH INDIAN OCEAN" fluid />
      

    </React.Fragment>
    )
  }

  export default Point16;

