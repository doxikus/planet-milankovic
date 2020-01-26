import React, {} from "react";
import { Embed, Image, Divider, Icon, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/barbados.jpg"
const Point3 = () => {
    return (
      <React.Fragment>
    <p>Barbados je najistočniji otok Malih Antila koje, za razliku od ostalih otoka u tom arhipelagu, nije vulkanskog podrijetla. Rad na uzorcima koralja sa Barbadosa jasno dokumentira visok nivo mora prije 82 i 122 tisuće godina, a takođe pruža i ubjedljiv dokaz o trećem visokom vodostaju prije 103 tisuće godina. Ovi podatci pokazuju da u posljednjih 150 tisuća godina postoji paralela između promjena u klimi Zemlje i promjena ljetnjeg osunčavanja izazvanih ciklusima promejne nagiba i precesije Zemljine osi. </p>
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

