import React, {useState, useEffect} from "react";
import { Icon, Image, Divider, Header, Placeholder, Loader } from 'semantic-ui-react'
import image1 from "../../../assets/locations/namibian.jpg"
const Point5 = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
  });

    return (
    <React.Fragment>
      <p>Показано је да током последњих 400.000 година узорак промене климе у јужноафричком сектору углавном прати схему одређену на основу испитивања ледене бушотине на станици Васток. Регионалне и локалне разлике су видљиве у узорцима узетим бушењем приобалног дна у Намибији и вероватно су у вези са још мало познатим локалним процесима. Очигледни су докази утицаја прецесије на климу у последњих 200.000 година.
</p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Фотографије
        </Header>      
      </Divider>
      {loading ? (
                <Placeholder fluid>
                  {/* <Placeholder.Image /> */}
                  <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
                </Placeholder>
                // <Loader />
              ) : (
                <Image src={image1} alt="ZAPISI SA KONTINENTALNOG GREBENA U NAMIBIJI" fluid />
              )}
      
    </React.Fragment>
    )
  }

  export default Point5;

