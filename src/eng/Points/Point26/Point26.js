import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/niger-delta.jpg"
const Point26 = () => {
    return (
    <React.Fragment>
      <p>
      Lake-level and palaeoecological evidence from Africa, Arabia and southern Asia for 9000 yBP suggests an intensification and increased poleward penetration of the northern monsoons. The vegetation belts shifted north by 4–6° latitude on the south side of the Sahara. In contrast, the monsoon over southern Africa was weaker than today. Calculations based on the new palaeogeographical map indicated that the areaaveraged surface albedo decreased by 0·10–0·14 in the zone 16–24°N and that total annual precipitation increased by 150–320 mm north of the inland delta of the Niger (20–24° 15′N). Experiments with atmospheric general-circulation models suggest that this asymmetrical pattern of anomalies in the strength of the tropical monsoons can be explained in broad terms by the different orbital configuration of the Earth at 9000 yBP. New 11-layer model, in which the albedo over Africa and Arabia between 15 and 30°N was reduced by between 0·04 and 0·06 to simulate the increase in vegetation cover at 9000 yBP. The results indicate that the surface-albedo change provides a significant positive feedback enhancing the direct climatic effects of Milankovitch forcing in the tropics.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="DELTA NIGERA, MALI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point26;

