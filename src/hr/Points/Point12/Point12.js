import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/pacific.png"
const Point12 = () => {
    return (
    <React.Fragment>
      <p>
      Na osnovi podataka iz bušotine u Tihom oceanu, malo sjevernije od ekvatora, Nicholas
Shackleton, zajedno s André Bergerom s Katoličkog sveučilkišta u Louvainu i s sveučilišta u
Torontu, otkrio je da sedimentni zapisi veoma točno prate Milankovićeve cikluse i dao je
konzistentnu kronologiju smjene hladnih i toplih perioda.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="BUŠOTINA U TIHOM OCEANU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point12;

