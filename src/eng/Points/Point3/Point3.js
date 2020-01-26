import React, {} from "react";
import { Embed, Image, Divider, Icon, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/barbados.jpg"
const Point3 = () => {
    return (
      <React.Fragment>
<p>
Barbados is the easternmost island in the Lesser Antilles, which is, unlike its sister islands not of volcanic origin. The work on coral samples from Barbados clearly documents the occurance of 82,000- and 122,000-year high stands of the sea, and also provides compelling evidence of the ocurrence of a third high stand 103,000 years ago. These data show a parallelism over the last 150,000 years between changes in Earth’s climate and changes in the summer insolation predicted from cycles in the tilt and precession of Earth’s axis. 

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

