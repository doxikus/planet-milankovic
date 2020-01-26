import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/south-australian-ridge.jpeg"
const Point13 = () => {
    return (
    <React.Fragment>
      <p>
      Milankovićeva teorija, koja ledena doba u pleistocenu objašnjava sekularnim varijacijama elemenata Zemljine orbite, nedavno je stekla značajnu podršku. Datirali smo niz paralelnih obalnih grebena u južnoj Australiji koristeći se podatcima o promjeni polariteta Zemljinog magnetnog polja i zaključili da on sadrži komponente koje stoje u vezi sa elementima Zemljine orbite. Osim dominantnog utjecaja komponente od 100 tisuća godina, i njene faze koja se odnosi na promjenu ekscentričnosti, dokazi sa obalskih grebena su suglasni Milankovićevoj teoriji.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="OBALSKI GREBEN U JUŽNOJ AUSTRALIJI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point13;

