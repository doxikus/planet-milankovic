import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/papua-new-guinea.jpg"
const Point18 = () => {
    return (
    <React.Fragment>
      <p>
      Evidence supporting Milankovitch’s theory of the precise timing of the ice ages first came from a series of fossil coral reefs that formed on a shallow ocean bench in the South Pacific during warm interglacial periods. As the ice ages came, more and more water froze into polar ice caps and the ocean levels dropped, leaving the reef exposed. When the ice melted, the ocean rose and warmed, and another reef formed. Today, the reefs form a visible series of steps along the shore of Papua New Guinea. The reefs, the age of which was well-defined because of the decaying uranium in the coral, measured out the millennia between ice ages. They also defined the maximum length of each ice age. The intervals fell exactly where Milankovitch said they would.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="Papua New Guinea" fluid />
      

    </React.Fragment>
    )
  }

  export default Point18;

