import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/village-orera.png"
const Point15 = () => {
    return (
    <React.Fragment>
      <p>
      Циклични плитко-језерски седименти, стари 12 милиона година (Миоцен), у близини села Орера у североисточној Шпанији, одражавају астрономски контролисане промене у водостају језера.  Индивидуални циклуси (наизменично послагани слојеви окамењеног блата и белог карбоната) одсликавају прецесиони циклус. Наизменични распоред дебело-танких слојева карбоната у узастопним циклусима блата и карбоната у централном, правилном делу сектора одражава циклус промене нагиба Земљине осе. Циклус ексцентричности од ~ 400 000 година видљив је у најнижем делу сектора (тамни интервал). 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографијa
        </Header>      
      </Divider>
      <Image src={image1} alt="СЕЛО ОРЕРА, ШПАНИЈА" fluid />
      

    </React.Fragment>
    )
  }

  export default Point15;

