import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/pacific.png"
const Point12 = () => {
    return (
    <React.Fragment>
      <p>
      На основу података из бушотине у Тихом океану, мало северније од полутара, Николас Шеклтон, заједно са Андре Бержеом с Католичког универзитета у Лувену и с универзитета у Торонту, открио је да седиментни записи веома тачно прате Миланковићеве циклусе и дао је конзистентну хронологију смене хладних и топлих периода.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      <Image src={image1} alt="BUŠOTINA U TIHOM OCEANU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point12;

