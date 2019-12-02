import React, {} from "react";
import { Button, Header, Icon, Segment, Grid, Divider } from 'semantic-ui-react'
import Particles from 'react-particles-js';
// import image1 from "./assets/earthbg.jpeg"
import image1 from "./assets/earthnight.png"
import { Link } from 'react-router-dom'


var sectionStyle = {
  backgroundImage: `url(${image1})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

export default function Home() {
  return (
    <div className="enter-container"
      
    >
    <Particles className="particles"
    params={{
      "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
    }}
      
     style={sectionStyle}
    />
    {/* <Segment placeholder>
    <Header as='h1' textAlign='center' inverted color='grey'>      
      Planet Milanković
    </Header>
    <Segment.Inline className="intro-controls">      
    <Header as='h4' textAlign='center' inverted color='grey'>      
      Planet Milanković
    </Header>
    <Link to="/hrvatski">
      <Button primary>HRVATSKI</Button>  
    </Link>    
    <Link to="/">
      <Button primary disabled>SRPSKI</Button>  
    </Link>
    <Link to="/">
      <Button primary disabled>ENGLISH</Button>  
    </Link>
    </Segment.Inline>
  </Segment> */}
   <Segment placeholder>
    <Grid columns={3} stackable textAlign='center'>      
      <Grid.Row verticalAlign='middle'>
      <Grid.Column>
        <Header as='h1' textAlign='center' inverted color='grey'>      
          Планета Миланковић
          </Header> 
            <Link to="/srpski">
            <Button primary>СРПСКИ</Button>  
            </Link>       
        </Grid.Column>
        <Grid.Column>
          <Header as='h1' textAlign='center' inverted color='grey'>      
          Planet Milanković
          </Header>  
        <Link to="/hrvatski">
          <Button primary>HRVATSKI</Button>  
        </Link>          
        </Grid.Column>        
        <Grid.Column>
        <Header as='h1' textAlign='center' inverted color='grey'>      
          Planet Milankovitch
          </Header>
            <Link to="/english">
            <Button primary>ENGLISH</Button>  
            </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  </div>
  );
}