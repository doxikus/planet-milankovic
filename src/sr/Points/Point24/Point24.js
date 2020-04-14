import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/italian-dolomite.jpeg"
const Point24 = () => {
    return (
    <React.Fragment>
      <p>
      Masiv Latemar u talijanskim Dolomitima bio je formacija nalik atolu sa jezgrom sačinjenоm od horizontalne karbonatne platforme iz srednjeg trijasa (-247 – -237 milijuna godina). Oscilacijama morskog nivoa nastalo je preko 500 tankih depozicijskih ciklusa. Obrazac taloženja i rezultati spektralne analize oscilacija morskog nivoa tumače se u okviru Milankovićeve teorije kao posljedica precesijskog ciklusa moduliranog „kratkim“ ciklusom ekscentričnosti (100.000 godina), što ukazuje da latemarski depozit obuhvata oko 10 milijuna godina.  
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="TALIJANSKI DOLOMITI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point24;

