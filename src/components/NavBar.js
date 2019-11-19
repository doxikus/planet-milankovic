import React, { useState, useEffect } from "react";
import { Dropdown, Menu, Button  } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    
    const [activeItem, setActiveItem] = useState();

    return (
        <Menu size='large' inverted>
        <Menu.Item header>Planet Milanković</Menu.Item>    
        {/* <Menu.Item
          name='Naslovnica'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        /> */}

        <Menu.Menu position='right'>
          <Dropdown item text='Odabir jezika'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/hrvatski">
                  <Button primary>HRVATSKI</Button>  
                </Link>   
                </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/srpski">
                  <Button primary>СРПСКИ</Button>  
                </Link>   
              </Dropdown.Item>
              <Dropdown.Item>              
                <Link to="/english">
                  <Button primary >ENGLISH</Button>  
                </Link>   
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item> */}
        </Menu.Menu>
      </Menu>
    )
  }

  export default Navigation;

