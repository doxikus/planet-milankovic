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
      <p>Pokazano je da tokom posljednjih 400.000 godina uzorak promjene klime  u južnoafričkom sektoru uglavnom prati shemu određenu na osnovu ispitivanja ledene bušotine na stanici Vostok. Regionalne i lokalne razlike su vidljive u uzorcima zetim bušenjem priobalnog dna u Namibiji i vjerojatno su u svezi sa još malo poznatim lokalnim procesima. Očigledni su dokazi utjecaja precesija na klimu u posljednjih 200.000 godina.
</p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Fotografije
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

