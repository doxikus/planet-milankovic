import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/village-orera.png"
const Point15 = () => {
    return (
    <React.Fragment>
      <p>
      Ciklični plitko-jezerski sediment, stari 12 milijuna godina (Miocen), u blizini sela Orera u sjeveroistočnoj Španjolskoj odražavaju astronomski kontrolirane promjene u vodostaju jezera.  Individualni ciklusi (naizmjenično poslagani slojevi okamenjenog blata i bijelog karbonata) odslikavaju precesijski ciklus. Naizmjenični raspored debelo-tankih slojeva karbonata u uzastopnim ciklusima blata i karbonata u centralnom, pravilnom dijelu sektora odražava ciklus promjene nagiba Zemljine osi. Ciklus ekscentričnosti od ~ 400 000 godina vidljiv je u najnižem dijelu sektora (tamni interval).
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="SELO ORERA, ŠPANJOLSKA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point15;

