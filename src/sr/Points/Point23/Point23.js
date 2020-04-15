import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/austriaalps.jpg"
const Point23 = () => {
    return (
    <React.Fragment>
      <p>
      Наизменични слојеви песковитих глинаца и кречњака у аустријским Алпима, настали у плитком мору на граници перм-тријас, показују цикличност која се поклапа са периодичношћу Миланковићевих циклуса, а интерпретирају се као показатељ да су последње ишчезнуће врста у перму и негативна амплитуда угљениковог изотопа трајали мање од 30 000 година.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографијa
        </Header>      
      </Divider>
      <Image src={image1} alt="AUSTRIJSKЕ ALPЕ" fluid />
      

    </React.Fragment>
    )
  }

  export default Point23;

