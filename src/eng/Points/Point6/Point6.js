import React, { useState, useEffect } from "react";
import { Icon, Image, Divider, Header } from 'semantic-ui-react'
import image1 from "../../../assets/locations/vostok.jpg"
const Point6 = () => {
    return (
    <React.Fragment>
      <p>
      Russian drilling engineers collaborated with French scientists at Vostok, a remote research station in Antarctica. Starting in 1980, the Russians began to drill a tube 10 centimetres across into the ice and backwards in time. Over the next 18 years, they drilled down 3.7 kilometres—the deepest ice core in the world. The message was the same all the way to the bottom of the core, where the air was 420,000 years or three ice ages old: ... A 100,000-year Milankovitch cycle fits very well with the timing of the major glaciations.

      </p>
      <p>
      While the record from Camp Century, Greenland, reached into the most recent ice age, by 1985 the Antarctic team at Vostok station had pulled up cores of ice stretching clear through the cold period and into the preceding warm period — a complete glacial cycle. The curves of СО2 level and temperature tracked one another remarkably closely. Measurements of an even more potent greenhouse gas, methane, showed a similar rise and fall that matched the rise and fall of temperature. The Vostok team pointed out that the swings in greenhouse gas levels might be amplifying the effect of the orbital shifts. A small rise or fall in temperature seemed likely to cause a rise or fall in the gas levels. It was the truly plausible theory for how minor shifts of sunlight could make the entire planet's temperature lurch back and forth. The changes in the atmosphere also answered the old persuasive objection to Milankovitch's theory — if the timing of ice ages was set by variations in the sunlight falling on a given hemisphere, why didn't the Southern Hemisphere get warmer as the Northern Hemisphere cooled, and vice-versa? The answer was that changes in atmospheric CO2 and methane physically linked the two hemispheres, powerfully warming or cooling the planet as a whole.
      </p>
      <Divider horizontal>
        <Header as="h4">
        <Icon name='image' />
        Photos
        </Header>      
      </Divider>
      <Image src={image1} alt="ISTRAŽIVAČKA STANICA VOSTOK NA ANTARKTICI" fluid />
    </React.Fragment>
    )
  }

  export default Point6;

