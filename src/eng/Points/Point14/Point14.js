import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/atol-einwetok.jpg"
const Point14 = () => {
    return (
    <React.Fragment>
      <p>
      The climate curve on the sea level can be generated from the curve for summertime insolation in the Northern Hemisphere if it is assumed that (i) glaciers respond both directly and indirectly , and (ii) there is a lag between these changes and the glacial response. ... Further support for the astronomical theory is obtained if these same assumptions are used to construct a predicted ice-volume curve for the past 180,000 years. The predicted glacial minima (hence sea level maxima) for this interval fall at 120,000 and 80,000 years ago. ... Recent results based on the Th230/U234 method of dating marine carbonates clearly indicate that a prominent stand of the sea higher than the present-day sea stand ocurred close to 120,000 years ago throughout the world. Thruber et al. demonstrated this event at Eniwetok, as well as Stearns and Thruber in the Mediterranean; Broecker and Thruber in the Florida Keys; Broecker and Kaufman in Southern California; and Veeh in the islands of the Pacific and Indian oceans. 

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="ATOL EINWETOK, PACIFIC" fluid />
      

    </React.Fragment>
    )
  }

  export default Point14;

