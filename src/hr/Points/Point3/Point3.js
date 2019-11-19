import React, {} from "react";
import { Embed, Image, Divider, Icon, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/barbados.jpg"
const Point3 = () => {
    return (
      <React.Fragment>
    <p>Roble Mattews i Kenneth Mesolella su 1965. godine ustvrdili da su terasaste obale otoka nastale prirastom koralja i da svaka terasa predstavlja sprud nastao na nekadašnjem nivou mora. </p>
      <p>Starosti tih sprudova određene su na 82,102 i 126 tisuća godina. Ovi datumi odgovaraju vremenima kada je sjeverna hemisfera bila toplija jer je bila nagnuta ka Suncu više nego obično. To ukazuje da na niskim geografskim širinama ciklus precesije zaista ima značajan utjecaj. </p>
      <p>U sva tri proučavana slučaja nađeno je da su geološki zapisi konzistentni s Milankovićevim ciklusima, kaže Lawrence Edwards, s Univerziteta Minnesota u Minneapolisu. Ova otkrića su objavljena 1968. godine, a potvrđena 1997., kao i daljnjim istraživanjima na Novoj Gvineji i Havajima.</p>
      {/* <img src={image1} alt="KORALJNE TERASE NA BARBADOSU" /> */}
      <Divider horizontal>      
      <Header as="h4">
      <Icon name='video' />
        Video
      </Header>
      </Divider>
      <Embed
          id='fOmkOurkjI0'
          placeholder={image1}
          source='youtube'
        />      
      <Divider horizontal>        
        <Header as="h4">
        <Icon name='image' />
        Fotografije
      </Header>
      </Divider>
      <Image src={image1} alt="KORALJNE TERASE NA BARBADOSU" fluid />
      </React.Fragment>
    )
  }

  export default Point3;

