import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/anisa.jpg"
const Point22 = () => {
    return (
    <React.Fragment>
      <p>
      U Ainsa basenu, španjolski Pirineji, izvađene su jezgre duge 230 metara, od kojih 150 metara pripada sloju srednjeg eocena sačinjenog od dubokomorskih siliklastičnih sedimenata. Uzorci iz tog dijela jezgre podvrgnuti su različitim analizama kako bi se utvrdile promjene prirodnog okruženja u ta davna vremena. Ciklostratigrafska analiza jezgre otkrila je Milankovićevu cikličnost na frekvencama od  ~0,03 ciklusa/m („kratka“ promjena ekscentričnosti), od ~0,09 ciklusa/m (promjena nagiba ose), ~0,15 cilusa/m (precesija) i ~0,19 ciklusa/m (precesija). Pokazalo se da orbitalni parametri kontroliraju ciklično deponiranje krupnozrnih sedimanata podvodnim silaznim strujanjem priobalnih voda. Ove ciklične promjene dubokomorskih sedimenata mogu da objasne dva vjerodostojna modela deponiranja, oba pokretana Milankovićevim ciklusima: (1) klimatski ciklusi sa vlažnim periodima povišene kemijske zračne abrazije, jači vjetrovi i oluje, a time jače spiranje i transport vodenim tokovima dovodili su do velikog unosa pjeskovitih sedimenata u duboki basen podvodnim strujama; (2) klimatski cilusi, sa hladnijim uslovima u vezi sa visokofrekventnim eustatičkim fluktuacijama morskog nivoa, i sa plitkim šelfovima riječnih delti rezultirali su većom količinom grubog detritalnog sedimenta dopremanih na morsko dno hiperpiknalnim tokovima. Ova studija pruža uvid u to kako promjena klime izazvana orbitalnim čimbenicima utječe na taloženje sedimenata i na dopremanje materijala sa kopna u dubokomorsku sredinu. 
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotgorafija
        </Header>      
      </Divider>
      <Image src={image1} alt="BASEN AINSA, ŠPANJOLSKI PIRINEJI" fluid />
      

    </React.Fragment>
    )
  }

  export default Point22;

