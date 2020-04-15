import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/botuvera.jpg"
const Point19 = () => {
    return (
    <React.Fragment>
      <p>
      John Kutzbach described how orbital changes in solar radiation drive monsoon variability over tens of thousands of years. As summer insolation increases, largely due to the precessional (wobble) Milankovitch cycle, so do the land-sea temperature gradients that, in turn, drive monsoon circulation in the subtropics. Thus, according to this so-called “orbital monsoon hypothesis,” wetter monsoons accompany higher summer insolation. A remarkable relationship between insolation and monsoon variability from stalagmite found in Botuvera Cave, Brazil, was reported. Soon after, another record from the same cave demonstrated the repeatability and reliability of these records from stalagmites. These two stalagmite time series span the last 116,000 years, and that are characterized by oxygen isotopic ratios that track the sinusoid of austral summer insolation.
But the longest and perhaps most impressive insolation-monsoon relationship comes from China. This record of monsoonal activity involved the study of numerous stalagmites (Cheng et al., 2016) and tracks the insolation record back to 640,000 years.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="PEĆINA BOTUVERA, BRAZIL" fluid />
      

    </React.Fragment>
    )
  }

  export default Point19;

