import React, {} from "react";
import { Embed, Image, Divider, Icon, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/barbados.jpg"
const Point3 = () => {
    return (
      <React.Fragment>
        <p>Робли Метјус и Кенет Месолела су 1965. године утврдили да су терасасте обале острва настале прирастом корала и да свака тераса представља спруд настао на некадашњем нивоу мора. Старости тих спрудова одређене су на 82, 102 и 126 хиљада година. Ови датуми одговарају временима када је северна хемисфера била топлија јер је била нагнута ка Сунцу више него обично. То указује да на ниским географским ширинама циклус прецесије заиста има значајан утицај.  У сва три проучавана случаја нађено је да су геолошки записи конзистентни са Миланковићевим циклусима, каже Лоренс Едвардс с Универзитета Минесота у Минеаполису. Ова открића су објављена 1968. године, а потврђена 1997, као и даљим истраживањима на Новој Гвинеји и Хавајима.</p>

      <Divider horizontal>      
      <Header as="h4">
      <Icon name='video' />
      Видео
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
        Фотографије
      </Header>
      </Divider>
      <Image src={image1} alt="KORALJNE TERASE NA BARBADOSU" fluid />
      </React.Fragment>
    )
  }

  export default Point3;

