import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/sejseli.jpg"
const Point20 = () => {
    return (
    <React.Fragment>
      <p>
      U Milankovićevo vrijeme se sumnjalo u utjecaj njegovih ciklusa na periodičnost klimatskih promjena. Međutim, od 1970. različita proučavanja su podržala model i predviđanja srpskog znanstvenika, i pokazala da su i geološki podatci otkriveni u  drevnim slojevima i fosilni ostatci određenih organizama kompatibilni s promjenama klime koji mogu objasniti periodičnost zaleđivanja svakih 100.000 godina. Jedna nedavna studija je potvrdila zapis o klimatskim ciklusima u okamenjenim sedimentima sve do prije 215 milijuna godina, tj. do osvita ere dinosaura. I ljudi bi, na neki način, mogli da budu Milankovićeva djeca. Nedavna proučavanja su dovela do pretpostavke da su klimatske promjene mogle izazvati smjenu sušnih perioda i poplava u istočnoj Africi, što je dovelo, prije 1,9 milijuna godina, do pojave Homo erectusa, prvog humanoida sa velikim mozgom. Prema drugim istraživanjima, ti ciklusi su također pokrenuli i migracije Homo sapiensa van Afrike – putovanje koje nas je povelo kroz prostor i vrijeme do ritma Milankovićevih ciklusa.

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="ISTOČNA AFRIKA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point20;

