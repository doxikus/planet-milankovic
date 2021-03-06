import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import * as parkDate from "./data/lokacije.json";

import { Button, Modal } from 'semantic-ui-react'

import Navigation from "./components/NavBar.js";

import Point1 from "./Points/Point1/Point1.js";
import Point2 from "./Points/Point2/Point2.js";
import Point3 from "./Points/Point3/Point3.js";
import Point4 from "./Points/Point4/Point4.js";
import Point5 from "./Points/Point5/Point5.js";
import Point6 from "./Points/Point6/Point6.js";
import Point7 from "./Points/Point7/Point7.js";
import Point8 from "./Points/Point8/Point8.js";





export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 14.1299598,
    longitude: -41.7817105,
    width: "100vw",
    height: "100vh",
    zoom: 1
  });
  const [selectedPark, setSelectedPark] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <Navigation />
      <ReactMapGL
        {...viewport}
        // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapboxApiAccessToken="pk.eyJ1IjoiZG94aWt1cyIsImEiOiJjazE2NzY1dHUwMHFkM21zM3B0dDR5Z2hlIn0.UJ6YPfFHYhO_nz8fFqk0FQ"
        // mapStyle="mapbox://styles/doxikus/ck16sta543wwi1cpax0174m05"
        // mapStyle="mapbox://styles/doxikus/ck16sw5m93mz71cs2nt8vjmkm"
        mapStyle="mapbox://styles/doxikus/ck1uz7eih4atc1cn06x6vfa5l"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.id}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >             
            <Button circular icon='globe' color={park.properties.color}
                          onClick={e => {
                            e.preventDefault();
                            setSelectedPark(park);
                            setModalOpen(!modalOpen);
                            // Modal.open("basic");
                          }}
            />
          </Marker>
          
        ))}

        {selectedPark ? (
          <>
          <Modal
            open={modalOpen}
            size='large'
          >
        <Modal.Header>
        {selectedPark.properties.NAME}
          <Button 
          circular 
          icon='close'
          floated='right'
          onClick={() => setModalOpen(!modalOpen)}
        />
        
          </Modal.Header>
    <Modal.Content>      
      <Modal.Description>        
        {selectedPark.properties.id === 1 &&
        <Point1 />
        }
        {selectedPark.properties.id === 2 &&
        <Point2 />
        }
        {selectedPark.properties.id === 3 &&
        <Point3 />
        }
        {selectedPark.properties.id === 4 &&
        <Point4 />
        }
        {selectedPark.properties.id === 5 &&
        <Point5 />
        }                
        {selectedPark.properties.id === 6 &&
        <Point6 />
        }  
        {selectedPark.properties.id === 7 &&
        <Point7 />
        }  
        {selectedPark.properties.id === 8 &&
        <Point8 />
        }                          
      </Modal.Description>   
    </Modal.Content>
    <Modal.Actions>
      <Button 
        primary
        
        onClick={() => setModalOpen(!modalOpen)}
      >
        Zatvori
      </Button>
    </Modal.Actions>   
    </Modal>
        {/* <Modal displayName="basic" placement="center" animationType="zoom">
        <div style={{ backgroundColor: "#fff", padding: 30 }}>          
        {selectedPark.properties.id === 1 &&
        <Point1 />
        }
        {selectedPark.properties.id === 2 &&
        <Point2 />
        }
            <p>
            <button className="zatvori" onClick={() => Modal.close("basic")}>Zatvori</button>
              </p>   
          
        </div>
        </Modal> */}
          
          {/* <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
              <img src="https://placeimg.com/300/300/nature" />
            </div>
          </Popup>  */}
          </>       
        ) : null}
      </ReactMapGL>
    </div>
  );
}