import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/biwa.jpg"
const Point7 = () => {
    return (
    <React.Fragment>
      <p>Француски истраживачи, који су 1990. испитивали слојеве пепела у седиментним језгрима Медитерана, известили су о изненађујућем налазу: изгледа као да се и вулканска активност појачава у правилним интервалима од 23.000 година. Мајкл Рампино и његов колега Кен Калдера открили су доказе у језеру Бива, у Јапану, да се вулканска активност појачава сваких 100.000 година, што је најдужи Миланковићев циклус и интервал између хладних максимума најјачих ледених периода.
</p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      <Image src={image1} alt="JEZERO BIWA, JAPAN" fluid />
      

    </React.Fragment>
    )
  }

  export default Point7;

