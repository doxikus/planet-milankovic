import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/botuvera.jpg"
const Point19 = () => {
    return (
    <React.Fragment>
      <p>
      John Kutzbach je objasnio na koji način promjene sunčevog zračenja izazvane promjenama Zemljine orbite uzrokuju promjenljivost monsuna duge desetine tisuća godina. Kad ljetnje osunčavanje raste, uglavnom zbog Milankovićevog precesijskog ciklusa, raste i temperaturni gradijent na dodiru kopna i mora, što opet pokreće monsunsko strujanje u suptropskim oblastima. Tako, prema ovoj tzv. „orbitalno monsunskoj hipotezi“, jače ljetnje osunčavanje biva praćeno vlažnijim monsunima.
Proučavanjem stalagmita iz pećine Botuvera u Brazilu, utvrđena je vanredna povezanost osunčavanja i monsunske promjenljivosti. Još jedan nalaz iz iste pećine pokazao je da su zapisi o klimatskoj prošlosti ponovljivi i pouzdani. Vremenski nizovi očuvani u ta dva stalagmita protezali su se na posljednjih 116 000 godina, a krivulja promjene kisikovih izotopa u njima pratila je sinusoidnu krivulju ljetnjeg osunčavanja južne Zemljine polulopte.
Ali najduži i možda najupečatljiviji dokazi o povezanosti monsuna i osunčavanja dolaze iz Kine. Zapis o monsunskoj aktivnosti načinjen je proučavanjem brojnih stalagmita (Cheng et al., 2016), i prati krivulju osunčavanja 640 000 godina unazad.

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="PEĆINA BOTUVERA, BRAZIL" fluid />
      

    </React.Fragment>
    )
  }

  export default Point19;

