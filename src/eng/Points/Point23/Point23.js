import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/austriaalps.jpg"
const Point23 = () => {
    return (
    <React.Fragment>
      <p>
      Naizmјenični slojevi pјeskovitih glinaca i krečnjaka u austrijskim Alpima, nastali u plitkom moru na granici perm-trijas, pokazuju cikličnost koja se poklapa sa periodičnošću Milankovićevih ciklusa, a interpretiraju se kao pokazatelj da su poslјednje iščeznuće vrsta u permu i negativna amplituda ugljikovog izotopa trajali manje od 30 000 godina
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="AUSTRIJSKЕ ALPЕ" fluid />
      

    </React.Fragment>
    )
  }

  export default Point23;

