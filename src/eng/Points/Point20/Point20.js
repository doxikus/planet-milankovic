import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/sejseli.jpg"
const Point20 = () => {
    return (
    <React.Fragment>
      <p>
      The effect of the Milankovitch cycles on the periodicity of the climate was received with suspicion in his day. However, since the 1970s various studies have supported the Serbian’s model and predictions, showing that both the geological data of ancient strata and the fossil record of certain organisms are compatible with fluctuations in climate that can explain the periodicity of the glaciations every 100,000 years. A recent study has confirmed the evidence of climatic cycles in rock sediments up to 215 million years ago, at the dawn of the dinosaur era. Also humans could be, in a way, children of Milankovitch. Recent studies have proposed that climatic cycles imposed alternating periods of floods and droughts in East Africa, which led, 1.9 million years ago, to the appearance of Homo erectus, the first human with a large brain.According to other research, these cycles also drove the migration of Homo sapiens out of Africa, a journey that takes us across space and time to the rhythm of the Milankovitch cycles.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="ISTOČNA AFRIKA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point20;

