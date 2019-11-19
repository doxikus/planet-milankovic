import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'

import image1 from "../../../assets/locations/slankamen1.jpg"
import image2 from "../../../assets/locations/slankamen2.jpg"
import image3 from "../../../assets/locations/slankamen3.png"

const Point1 = () => {
    return (
        <>            
            <p>Hiljadama godina navejavani lesni profili u Starom Slankamenu izuzetno su vredno prirodno
dobro koje čuva tajne ledenog doba i klimatskih promena tokom njega. To je geološki
lokalitet jedinstven u Evropi jer predstavlja najkompletniji arhiv paleoklimatskih promena
tokom poslednjih 800.000 godina na evropskom kopnu. Jedan je od tri najvrednija lokaliteta
ovog tipa u svetu i može se porediti sa lesnim naslagama u Kini i Centralnoj Aziji. Lesni profili
u Starom Slankamenu su već oko 300 godina predmet istraživanja domaćih i stranih naučnika
iz različitih delova sveta i kako su ona ukazala na njihov izuzetan značaj, 1975. godine
stavljeni su pod zaštitu i proglašeni spomenikom prirode. U I kategoriju prirodnih dobara
Srbije svrstani su 2007. godine.</p>
<p>
Lesni profil u Starom Slankamenu predstavlja, najkompletnije geonasleđe lesnih sedimenta u
Evropi stari oko 800 000 godina. U njima se čuva tajna ledenog doba, a punih 280 godina su
predmet istraživanja domaćih i stranih naučnika.Naučnici tvrde da upoređivanjem čestica
lesnih profila na različitim mestima zemljine kugle mogu, na primer, da rekonstruišu kakvi su
bili klimatski uslovi u tom delu sveta pre petnaest hiljada godina!
</p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
<div className="gallery-inline">
        <img src={image2} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        <img src={image3} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        </div>
<p>
Na lesnom profilu kod Starog Slenkamena izdvaja se jedanaest pedokompleksa:
pedokompleksi F11 do F9, rubificiranog smeđeg zemljišta koja odgovaraju toploj i vlažnoj
mediteranskoj klimi starijeg pleistocena. Smeđa paleozemljišta pedokompleksa F8 i F7
odgovaraju kontinentalnoj umerenopromenljivoj klimi srednjeg pleistocena, koji se završava
rubificiranim smeđim paleozemljištem tj., pedokompleksom F6, što ukazuje na povratak
tople mediteranske klime. Pedokompleks F5, pripisuje se početku Virma ili Ris-Virm
interglacijalu. Ovo se objašnjava pojavom toplije i vlažnije klime tokom mlađeg pleistocena u
južnim delovima Evrope, koji je pružio povoljne uslove za obrazovanje černozema.
</p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
        </Header>      
      </Divider>
        <img src={image1} alt="LESNI PROFIL U STAROM SLANKAMENU" />
        </>
    
    )
  }

  export default Point1;

