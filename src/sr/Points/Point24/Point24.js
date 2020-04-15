import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/italian-dolomite.jpeg"
const Point24 = () => {
    return (
    <React.Fragment>
      <p>
      Масив Латемар у италијанским Доломитима био је формација налик атолу са језгром сачињеним од хоризонталне карбонатне платформе из средњег тријаса (-247 – -237 милиона година). Осцилацијама морског нивоа настало је преко 500 танких депозиционих циклуса. Образац таложења и резутати спектралне анализе осцилација морског нивоа тумаче се у оквиру Миланковићеве теорије као последица прецесионог циклуса модулисаног „кратким“ циклусом ексцентричности (100.000 година), што указује да латемарски депозит обухвата око 10 милиона година.  
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографијa
        </Header>      
      </Divider>
      <Image src={image1} alt="TALIJANSKI DOLOMITI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point24;

