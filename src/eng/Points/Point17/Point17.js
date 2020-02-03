import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/newark-basin.jpg"
const Point17 = () => {
    return (
    <React.Fragment>
      <p>
      Geologists suggested that the patterns found in the Newark Basin, an ancient rift basin covering northern New Jersey, southeastern Pennsylvania and southern New York, could reflect the climatic effects of a predicted 405,000-year Milankovitch cycle, but the Newark Basin sediments were unable to be dated precisely enough to confirm the link. Geologist Dennis Kent of Columbia University’s Lamont-Doherty Earth Observatory and Rutgers University and colleagues assigned dates to the Newark Basin rock record by correlating it with rocks cored from the Upper Triassic Chinle Formation in Petrified Forest National Park in Arizona. The team correlated the Newark Basin rocks by matching the pattern of Earth’s magnetic field reversals recorded in both places. 
A well-preserved sequence of Triassic lake sediments bearing evidence of cyclical patterns of climate change in the Newark Basin confirms the existence of a Milankovitch 405,000-year cycle — a periodic change in the shape of Earth’s orbit caused by Earth’s gravitational interactions with Jupiter and Venus. Other Milankovitch cycles — a 23,000-year cycle related to the wobble of Earth’s axis, a 41,000-year cycle related to the tilt of the axis, and a 100,000-year cycle related to orbital eccentricity — are relatively well established based on glaciological and sedimentary records.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="Newark Basin, USA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point17;

