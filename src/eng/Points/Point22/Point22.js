import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/anisa.jpg"
const Point22 = () => {
    return (
    <React.Fragment>
      <p>
      A multi-proxy approach to understand environmental change in deep time was undertaken on about 150 m of core from a 230 m-long Middle Eocene core from the Ainsa basin, Spanish Pyrenees, representing deep-marine siliciclastic sediments. Cyclostratigraphic analysis of the core reveals Milankovitch cyclicity at frequencies of ~0.03 cycles/m (short eccentricity), ~0.09 cycles/m (obliquity), ~0.15 cycles/m (precession couplet) and ~0.19 cycles/m (precession couplet). Orbital parameters appear to have controlled the cyclic delivery of coarser-grained sediment by turbidity currents. Two equally plausible depositional models, both as Milankovitch-driven, can explain the cyclical changes in the deep-marine sediments: (1) climatic cycles, with humid periods of enhanced chemical weathering, increased storminess and greater riverine run-off, leading to high sedimentflux to the deep basin as sandstone turbidites; (2) climatic cycles, with cooler conditions linked to high-frequency small-scale eustatic sea-level fluctuations, with lowstand shelf-edge delta progradation, resulting in greater volumes of coarse detrital sediment to the seafloor by hyperpycnal flows. This study provides an insight into the likely depositional effects of orbitally induced climate change on the nature and delivery of terrigenous sediment into deep-marine environments.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotgorafija
        </Header>      
      </Divider>
      <Image src={image1} alt="BASEN AINSA, ŠPANJOLSKI PIRINEJI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point22;

