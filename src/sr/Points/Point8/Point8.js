import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/nigata.jpg"
const Point8 = () => {
    return (
    <React.Fragment>
      <p>
      Изведена је седиментолошка и математичка анализа слојевитости неогенских пешчара дуж Гомото реке у централном Јапану. Периодичност цикличних варијација препозната у броју и дебљини слојева пешчара, у које су уметнути слојеви полуморске скамењене глине, која износи 100.000 година, одражава Миланковићеве циклусе.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      <Image src={image1} alt="NEOGENSKI NIGATA BAZEN U SREDIŠNJEM JAPANU" fluid />
      

    </React.Fragment>
    )
  }

  export default Point8;

