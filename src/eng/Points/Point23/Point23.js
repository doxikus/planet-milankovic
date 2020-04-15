import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/austriaalps.jpg"
const Point23 = () => {
    return (
    <React.Fragment>
      <p>
      Interbedded marls and limestones of shallow-marine origin spanning the Permian–Triassic boundary interval in the Austrian Alps display cycles with ratios matching Milankovitch periodicities, and have been interpreted to imply that the latest Permian extinction and negative carbon isotope spike spanned less than 30 myr.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="AUSTRIJSKЕ ALPЕ" fluid />
      

    </React.Fragment>
    )
  }

  export default Point23;

