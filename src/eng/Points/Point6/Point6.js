import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/vostok.jpg"
const Point6 = () => {
    return (
    <React.Fragment>
      <p>
      Russian drilling engineers collaborated with French scientists at Vostok, a remote research station in Antarctica. Starting in 1980, the Russians began to drill a tube 10 centimetres across into the ice and backwards in time. Over the next 18 years, they drilled down 3.7 kilometres—the deepest ice core in the world. The message was the same all the way to the bottom of the core, where the air was 420,000 years or three ice ages old: ... A 100,000-year Milankovitch cycle fits very well with the timing of the major glaciations.

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="ISTRAŽIVAČKA STANICA VOSTOK NA ANTARKTICI" fluid />
    </React.Fragment>
    )
  }

  export default Point6;

