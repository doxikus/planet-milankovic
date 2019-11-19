import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'

import image1 from "../../../assets/locations/ardentarola1.jpeg"
import image2 from "../../../assets/locations/ardentarola2.png"
import image3 from "../../../assets/locations/ardentarola3.png"

const Point2 = () => {
    return (
    <>    
    <p>Stalagmit, koga je talijanski istraživač Fabrizio Antonioli izvadio iz podvodne pećine na otoku Argentarola kod zapadne obale srednje Italije, prepolovljen uzdužno pokazuje izvanredno točan i neobično lijep zapis klimatske prošlosti Zemlje. </p>
<p>Izvađen je sa dubine od 30 metara, ali jasno pokazuje razdoblja kada,  u pećini gdje je „rastao“ nije bilo morske vode – to je bilo tokom pojedinih glacijacija kada je led nataložen na kopnu „izvlačio“ vodu iz mora čiji je nivo opadao za nekoliko desetina metara. Određivanje odnosa izotopa uranija i torija zarobljenih u kamenom tkivu stalagmita, pokazalo je da ovaj speleotem star 206.000 godina. Datiranjem starosti granica između raznorodnih slojeva, utvrđeno je da je prvi put zaronio prije 202.000 godina da bi izronio oko 12.000 godina kasnije – što govori o toplom razdoblju tokom koga je nivo mora bio bar toliko visok da ga potopi. </p>
<p>U speleotemu je otuda, kao u otvorenoj knjizi, još jednom pročitana Milankovićeva teorija. Ona je zapravo jedina klimatološka teorija koja nam omogućava da čitamo ovu knjigu. Jasno se razlikuju Milankovićevi ciklusi u periodima suhozemnog (MIS 7.2, MIS 6) i podvodnog rasta (MIS 7.1, MIS 5). U točkama duž vertikalne ose ubeležene su i utvrđene starosti (zajedno sa mogućom greškom) pojedinih slojeva stalagmita.</p>

        
        <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
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

