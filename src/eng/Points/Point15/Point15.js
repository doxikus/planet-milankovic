import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/village-orera.png"
const Point15 = () => {
    return (
    <React.Fragment>
      <p>
      The 12-million-year-old (Miocene) cyclic shallow lake sediments near the village Orera, northeastern Spain, reflect astronomically controlled variations in lake level. Individual cycles (alternationas between dark mudstone and white carbonate) reflect the precession cycle. Thick-thin alternations of carbonate beds in successive mudstone-carbonate cycles in central, regular part of the section reflect the obliquity cycle. The ~ 400,000-year eccentricity cycle is visible in the lowest part of the section (dark inteval).
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="VILLAGE ORERA, SPAIN" fluid />
      

    </React.Fragment>
    )
  }

  export default Point15;

