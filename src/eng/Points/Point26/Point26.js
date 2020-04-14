import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/niger-delta.jpg"
const Point26 = () => {
    return (
    <React.Fragment>
      <p>
      Jezerski nivoi i paleoekološki nalazi iz Afrike, Arabije i južne Azije za posljednjih 9000 godina ukazuju na to da se sjeverni monsuni pojačavaju i polako pomjeraju ka polu. Na južnoj strani Sahare vegetacijski pojasevi su se pomjerili na sjever za 4-6o geografske širine. Obrnuto, monsun nad južnom Afrikom je nekad bio slabiji nego danas. Proračuni zasnovani na novoj paleogeografskoj mapi ukazali su da se površinski albedo umanjio za 0,10-0,14 u zoni između 16-24o sjeverne širine, a da su se ukupne godišnje padavine uvećale za 150-320 mm sjeverno od delte Nigera (20-24o 15' N). Ogledi s modelima opće atmosferske cirkulacije sugeriraju da se ovaj asimetrični obrazac anomalija u jačini tropskih monsuna može objasniti promjenom orbitalne geometrije Zemlje za 9000 godina. Rezultati numeričkog eksperimenta u kome je albedo iznad Afrike i Arabijskog poluotoka (15-30o N) snižen za 0,04-0,06 kako bi se simulirala promjena površinskog albeda usljed širenja vegetacije u posljednjih 9000 godina ukazuju da promjene površinskog albeda izazivaju značajan pozitivni povratni efekat koji pojačava neposredne klimatske posljedice Milankovićevih ciklusa u tropima. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="DELTA NIGERA, MALI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point26;

