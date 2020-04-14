import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/papua-new-guinea.jpg"
const Point18 = () => {
    return (
    <React.Fragment>
      <p>
      Dokazi koji potvrđuju Milankovićevu teoriju preciznog vremenskog određivanja pojave ledenih doba najprije su došli sa fosilnih koraljnih grebena koji su se tijekom toplih međuledenih perioda formirali na plitkom oceanskom pragu u južnom Pacifiku. Za vrijeme ledenog doba, sve više vode se povlači u ledene polarne kalote, nivo oceana opada, i greben izranja iz vode. Kada se led topi, ocean se grije i podiže, i tada se stvara još jedan greben. Danas, ti grebeni obrazuju vidljivi stepenasti niz duž obale Papue Nove Gvineje. Ovi grebeni, čija je starost pouzdano utvrđena mjerenjem raspada urana u koraljima,  brojali su milenije između ledenih doba. Također su i odredili maksimalno trajanje svakog od ledenih doba. Ti intervali su se na vremenskoj skali našli upravo na mjestima koje im je Milanković odredio. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="Papua New Guinea" fluid />
      

    </React.Fragment>
    )
  }

  export default Point18;

