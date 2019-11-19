import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/nigata.jpg"
const Point8 = () => {
    return (
    <React.Fragment>
      <p>
      Izvedena je sedimentološka i matematička analiza slojevitosti neogenskih pješčara duž Gomoto rijeke u centralnom Japanu. Periodičnost cikličnih varijacija prepoznata je u broju i debljini slojeva pješčara, u koje su umetnuti slojevi polumorske skamenjene gline, koja iznosi 100.000 godina, odražava Milankovićeve cikluse.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="NEOGENSKI NIGATA BAZEN U SREDIŠNJEM JAPANU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point8;

