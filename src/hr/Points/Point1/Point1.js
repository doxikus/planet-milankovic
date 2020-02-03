import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'

import image1 from "../../../assets/locations/slankamen1.jpg"
import image2 from "../../../assets/locations/slankamen2.jpg"
import image3 from "../../../assets/locations/slankamen3.png"

const Point1 = () => {
    return (
        <>            
<p>
Jedan od najboljih zapisa o klimi kvartara može se naći u debelim nanosima lesa, a neke od najboljih lesnih naslaga u Europi nalaze se u Vojvodini, sjeverna Srbija. Lesni profil Stari Slankamen leži na sjeverozapadu srijemskog lesnog platoa na desnoj strani Dunava. Tamošnja 40 m visoka litica sačinjena je od lesa sa sedam velikih međuslojeva paleo-pedokompleksa i može se smatrati jednim od najznačajnijih, gotovo neprekinutih kvartarskih profila u oblasti Karpatskog (Panonskog) basena. Taj visoki lesni profil kod Starog Slankamena pruža rijetku mogućnost detaljnog istraživanja dugotrajnih klimatskih promjena srednjeg pleistocena u regiji na koju su utjecale zračne mase sa visokih i srednjih geografskih širina, kao i sa sjevernog Atlantika i Sredozemlja. Promjena relativnog značaja tih zračnih masa tijekom vremena pruža nam uvid u lokalne i regionalne sinoptičke sustave i njihovu evoluciju tijekom posljednjih 850 000 godina. Ovaj profil se zato može smatrati jednim od ključnih lesnih paleoklimatskh zapisa u Europi. Lesni profil Stari Slankamen dao je odlične rezultate kojim se mogu pratiti klimatske promjene koje je Milutin Milanković predvidio na osnovu promjena geometrije Zemljine orbite.
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

