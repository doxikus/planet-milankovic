import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/sanbao.jpg"
const Point27 = () => {
    return (
    <React.Fragment>
      <p>
      Podatci dobijeni analizom kisikovih izotopa u uzorcima iz kineskih pеćina opisuju promјene koje su se odigravale i u azijskom monsunu i u globalnoj klimi. Oni koje smo dobili iz Sanbao pećine omogućili su nam da zapis o klimi Kine produžimo na poslјednjih 640 000 godina. Dužina tog zapisa i precizno određivanje starosti uzoraka omogućuju nam da testiramo ideju da su promјene u osunčavanju izazvane Zemljinom precesijom dovele do okončanja svakog od poslјednjih sedam ledenih doba, kao i tisućama godina dugih intervala smanjenih monsunskih kiša koji su povezani sa svakim od završetaka ledenih doba. Okončanja ledenih doba razdvojena su sa po četiri ili pet precesijskih ciklusa, što podržava ideju o tome da je ciklus glacijacije od 100 000 godina zapravo srednja vrijednost diskretnih brojeva precesijskih ciklusa. Ova promatranja ukazuju na to da  Milankovićeva dinamika osunčavanja, djelimično, diktira ritam pojavljivanja tiusćugodišnjih zbivanja, uključujući ona koja su povezana sa okončanjima ledenih doba, a isto tako i sa „nezavršenim okončanjima“.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografija
        </Header>      
      </Divider>
      <Image src={image1} alt="PEĆINA SANBAO, KINA" fluid />
      

    </React.Fragment>
    )
  }

  export default Point27;

