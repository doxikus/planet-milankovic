import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/moorewille.jpg"
const Point11 = () => {
    return (
    <React.Fragment>
      <p>
      Спектралном анализом узорака, узетих из дебелих наслага дрвеног угља у североисточном делу Мексичког залива, локалитет Муревил, у којима се на дециметарским растојањима смењују слојеви угља и лапорца, уочене су три Миланковићеве фреквенције (ексцентричност, промена нагиба осе и прецесија). Нарочито су упадљиви утицаји циклуса промене ексцентричности и промене нагиба осе.

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      <Image src={image1} alt="MILANKOVIĆEVI CIKLUSI U UGLJENU U SJEVEROISTOČNOJ OBLASTI
MEKSIČKOG ZALJEVA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point11;

