import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'

import image1 from "../../../assets/locations/slankamen1.jpg"
import image2 from "../../../assets/locations/slankamen2.jpg"
import image3 from "../../../assets/locations/slankamen3.png"

const Point1 = () => {
    return (
        <>            
        <p>
        Један од најбољих записа о клими квартара може се наћи у дебелим наносима леса, а неке од најбољих лесних наслага у Европи налазе се у Војводини, северна Србија. Лесни профил Стари Сланкамен лежи на северозападу сремског лесног платоа на десној страни Дунава. Тамошња 40 м висока литица сачињена је од леса са седам великих међуслојева палео-педокомплекса и може се сматрати једним од најзначајнијих, готово непрекинутих квартарских профила у области Карпатског (Панонског) басена. Тај високи лесни профил код Старог Сланкамена пружа ретку могућност детаљног истраживања дуготрајних климатских промена средњег плеистоцена у регији на коју су утицале ваздушне масе са високих и средњих географских ширина, као и са северног Атлантика и Средоземља. Промена релативног значаја тих ваздушних маса током времена пружа нам увид у локалне и регионалне синоптичке системе и њихову еволуцију током последњих 850 000 година. Овај профил се зато може сматрати једним од кључних лесних палеоклиматскх записа у Европи. Лесни профил Стари Сланкамен дао је одличне резултате којим се могу пратити климатске промене које је Милутин Миланковић предвидео на основу промена геометрије Земљине орбите.
        </p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
<div className="gallery-inline">
        <img src={image2} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        <img src={image3} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        </div>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
        <img src={image1} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        </>
    
    )
  }

  export default Point1;

