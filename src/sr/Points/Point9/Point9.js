import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/henderson.jpg"
const Point9 = () => {
    return (
    <React.Fragment>
      <p>
      Сува клима острва Хендерсон необично повољно утиче на очување фосила. Фосилизовани корални гребени и овде су пружили доказе о смени ледених и топлих климатских периода. Проучавања су показала да је високи ниво мора пре 80.000, 105.000 и 125.000 година настао узајамним дејством промене ексцентричности и промене нагиба Земљине осе. Привидна противречност у прорачуну времена глацијације од пре 127.000 година решена је методом уранијумског датовања коралних гребена, што је показало потпуну сагласност са Миланковићем.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      <Image src={image1} alt="KORALJNI GREBENI NA OTOKU HENDERSON" fluid />
      

    </React.Fragment>
    )
  }

  export default Point9;

