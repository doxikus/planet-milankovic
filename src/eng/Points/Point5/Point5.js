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
      <p>
      Over the last 400 000 years, the pattern of climatic change in the southern African sector of the southern hemisphere is shown to have followed in broad outline that defined by the Vostock ice-core sequence. Regional-local differences are apparent in the inshore ocean sediment core record taken from the continental shelf off Namibia and probably relate to little-understood local processes. Clear evidence of precessional Milankovitch forcing of climate is evident for the subcontinent over the last 200 000 years.
      </p>
<Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
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

