import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/bajkal.jpg"
const Point10 = () => {
    return (
    <React.Fragment>
      <p>
      У седиментним записима биогеног силицијум-диоксида из Бајкалског језера нађени су сигнали свих Миланковићевих циклуса. Нарочито је јак сигнал циклуса промене нагиба Земљине осе ротације у периоду између 1,8 и 0,8 милионa година уназад; утицај 100.000 година дугог циклуса промене ексцентричности расте тoком последњих 0,8 милионa година. Очекивана фреквенција прецесије од 23.000 година је највиша током последњих 400 000 година.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      <Image src={image1} alt="ZAPIS U BIOGENOM SILICIJ-DIOKSIDU IZ BAJKALSKOG JEZERA U JUŽNOM
SIBIRU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point10;

