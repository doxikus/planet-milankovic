import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/south-australian-ridge.jpeg"
const Point13 = () => {
    return (
    <React.Fragment>
      <p>
      Миланковићева теорија, која ледена доба у плеистоцену објашњава секуларним варијацијама елемената Земљине орбите, недавно је стекла значајну подршку. Датовали смо низ паралелних обалних гребена у јужној Аустралији користећи се подацима о промени поларитета Земљиног магнетног поља и закључили да он садржи компоненте које стоје у вези са елементима Земљине орбите. Осим доминантног утицаја компоненте од 100 хиљада година, и њене фазе која се односи на промену ексцентричности, докази са обалских гребена су сагласни Миланковићевој теорији. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографијa
        </Header>      
      </Divider>
      <Image src={image1} alt="ОБАЛСКИ ГРЕБЕН У ЈУЖНОЈ АУСТРАЛИЈИ" fluid />
      

    </React.Fragment>
    )
  }

  export default Point13;

