import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/sahara.jpg"
const Point25 = () => {
    return (
    <React.Fragment>
      <p>
      Sjevernoafrički klimatski ciklusi imaju jedinstvenu povijest koja se može pratiti milijunima godina unazad. Ciklični klimatski obrazac Sahare odlikuje se značajnim promjenama jačine sjevernoafričkih monsuna. Kada je sjevernoafrički monsun najjači, godišnje padavine rastu, usljed čega u oblasti Sahare buja vegetacija, što stvara uvjete koji se uobičajeno nazivaju "zelena Sahara". Obrnuto, kada je sjevernoafrički monsun relativno slab, godišnje količine padavina se smanjuju, vegetacije je manje, i to saharsku klimu privodi u fazu poznatu kao "pustinjska Sahara". 
Varijacije klime u oblasti Sahare mogu se u osnovi pripisati promjenama u osunčavanju usljed sporih promjena Zemljinih orbitalnih parametara. Po Milankovićevoj teoriji, ti parametri su: precesija ravnodnevice, promjena nagiba osi, i ekscentričnost. Precesija ravnodnevice se smatra najznačajnijim orbitalnim parametrom za formiranje ciklusa "zelene Sahare" i "pustinjske Sahare".
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="SAHARA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point25;

