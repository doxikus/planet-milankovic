import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/bahamas.jpg"
const Point4 = () => {
    return (
    <React.Fragment>
      <p>Валас Брокер je почетком шездесетих година (ХХ век) испитивао старост фосилних спрудова и утврдиo да је, осим у данашње време, море значајно расло и пре 80.000 година и пре 120.000 година, што је одговарало трима од четири максимума на Миланковићевој кривој осунчавања.
</p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      <Image src={image1} alt="KORALJNE TERASE NA BARBADOSU" fluid />
    </React.Fragment>
    )
  }

  export default Point4;

