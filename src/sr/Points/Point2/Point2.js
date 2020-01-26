import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'

import image1 from "../../../assets/locations/ardentarola1.jpeg"
import image2 from "../../../assets/locations/ardentarola2.png"
import image3 from "../../../assets/locations/ardentarola3.png"

const Point2 = () => {
    return (
    <>    
        <p>Барбадос је најисточније острво Малих Антила које, за разлику од осталих острва у том архипелагу, није вулканског порекла. Рад на узорцима корала са Барбадоса јасно документује висок ниво мора пре 82 и 122 хиљаде година, а такође пружа и убедљив доказ о трећем високом водостају пре 103 хиљаде година. Ови подаци показују да у последњих 150 хиљада година постоји паралела између промена у клими Земље и промена летњег осунчавања изазваних циклусима промене нагиба и прецесије Земљине осе. </p>
        <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
        <img src={image1} alt="Speleotem s ostrva Arđentarola" />
        <div className="gallery-inline">
        <img src={image2} alt="Speleotem s ostrva Arđentarola" />
        <img src={image3} alt="Speleotem s ostrva Arđentarola" />
        </div>
        <Divider horizontal>
              
      </Divider>        
    </>
    )
  }

  export default Point2;

