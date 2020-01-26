import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/atol-einwetok.jpg"
const Point14 = () => {
    return (
    <React.Fragment>
      <p>
      Krivulja klimatskih promjena odraženih u promjeni morskog nivoa može se generirati iz krivulje ljetnjeg osunčavanja sjeverne hemisfere ukoliko se pretpostavi da (1) ledenjaci (na promjenu osunčavanja) odgovaraju i izravno i neizravno, kao i da (2) postoji kašnjenje ledenjačkog odgovora na promjene osunčavanja... Daljnje potvrde astronomske teorije se dobijaju ukoliko se iste te protpostavke koriste za iscrtavanje krivulje očekivanih promjena u zapremini leda za posljednjih 180 000 godina. Predviđeni minimumi glacijacije (maksimumi morskog nivoa) u tom intervalu padaju na 120 000 i 80 000 godina... Skorašnji rezultati dobijeni Th230/U234 metodom datiranja morskih karbonata jasno ukazuju da je u cijelom svijetu do značajnog povišenja morskog nivoa u odnosu na današnji došlo prije oko 120 000 godina. Thruber et al. su utvrdili taj događaj na atolu Eniwetok, kao i Stearns i Thruber u Mediteranu; Broecker i Thruber na Florida Keys; Broecker i Kaufman u južnoj Kaliforniji; i Veeh na otocima Tihog i Indijskog oceana. 

      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="ATOL EINWETOK, TIHI OCEAN" fluid />
      

    </React.Fragment>
    )
  }

  export default Point14;

