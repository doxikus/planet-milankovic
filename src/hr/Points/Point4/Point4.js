import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/bahamas.jpg"
const Point4 = () => {
    return (
    <React.Fragment>
      <p>Wallace Broeker je početkom šezdesetih godina 20- tog stoljeća ispitivao starost fosilnih sprudova i ustvrdio je da je, osim u današnje vrijeme, more značajno poraslo i prije 80.000 godina i prije 120.000 godina, što je odgovaralo trima od četiri makismuma na Milankovićevoj krivulji osunčavanja.</p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
      <Image src={image1} alt="KORALJNE TERASE NA BARBADOSU" fluid />
    </React.Fragment>
    )
  }

  export default Point4;

