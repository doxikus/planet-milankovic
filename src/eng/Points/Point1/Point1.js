import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'

import image1 from "../../../assets/locations/slankamen1.jpg"
import image2 from "../../../assets/locations/slankamen2.jpg"
import image3 from "../../../assets/locations/slankamen3.png"

const Point1 = () => {
    return (
        <>            
            <p>
              One of the best recorders of Quaternary climate is a thick loess deposit, and some of the best loess deposits in Europe are in Voyvodina, north Serbia. The Stari Slankamen loess section is located on the northeastern part of the Srem Loess Plateau on the west bank of the Danube River. The ca. 40-m thick cliff is comprised of loess intercalated with 7 major paleo-pedocomplexes and can be considered to be one of the most significant, nearly continuous, Quaternary sections in the Carpathian (Panonnian) Basin area. This long loess section at Stari Slankamen, on the Danube, provides a rare opportunity to investigate detailed and long-term climatic change over the Middle Pleistocene in a region influenced by air masses from high and middle latitudes as well as the North Atlantic and Mediterranean. The changing relative importance of these air masses through time provides insight into local and regional synoptic systems and their evolution through the last ca. 850 ka. The section can thus be considered as one of the key loess - paleoclimate records in Europe. The Stari Slankamen loess section has yielded excellent results which can be matched to the climate change determinations made by Milutin Milankovitch on the basis of changes in the Earth’s orbital geometry. 
            </p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
<div className="gallery-inline">
        <img src={image2} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        <img src={image3} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        </div>

<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
        <img src={image1} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        </>
    
    )
  }

  export default Point1;

