import React, {} from "react";
import { Embed, Image, Divider, Icon, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/barbados.jpg"
const Point3 = () => {
    return (
      <React.Fragment>
<p>
Fossilised coral reefs on Barbados mark peaks in sea level, which indicate the warmest spells between ice ages, are 82 000, 102 000 and 126 000 years old. These dates match the times when the northern hemisphere was warmer because it was tilting more towards the Sun than usual. The tilt changes because of a small periodic wobble of the Earth's axis known as the Milankovitch cycle. "In all three instances we dated, the record was consistent with the astronomical theory," says Lawrence Edwards, University of Minnesota in Minneapolis.

</p>
      {/* <img src={image1} alt="KORALJNE TERASE NA BARBADOSU" /> */}
      <Divider horizontal>      
      <Header as="h4">
      <Icon name='video' />
        Video
      </Header>
      </Divider>
      <Embed
          id='fOmkOurkjI0'
          placeholder={image1}
          source='youtube'
        />      
      <Divider horizontal>        
        <Header as="h4">
        <Icon name='image' />
        Photos
      </Header>
      </Divider>
      <Image src={image1} alt="KORALJNE TERASE NA BARBADOSU" fluid />
      </React.Fragment>
    )
  }

  export default Point3;

