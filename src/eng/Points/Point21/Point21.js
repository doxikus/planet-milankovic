import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/baoji.jpg"
const Point21 = () => {
    return (
    <React.Fragment>
      <p>
      The grain size of the Baoji loess-soil sequence was analyzed at 10 cm intervals. A change in loess-soil grains is interpreted as the result of the glacial-interglacial cyclic variations in the intensity of the winter monsoon winds out of Siberia. The grain size record is thus employed as a proxy indicator of the winter monsoon circulation and tuned to the Milankovitch orbital records calculated by Berger and Loutre (1991) under the control of major magnetic reversals. The resulting grain size time scale is tightly constrained, as suggested by the following facts: (1) the filtered obliquity and precession components from the grain size data on the orbital time scale closely match the theoretical orbital records; (3) there is close coherence between the Baoji grain size time series and the orbital variations at the orbital frequency bands over the entire 0–2.5 Ma period. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="BAOJI LESNI PROFIL, KINA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point21;

