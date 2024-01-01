import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  return (
    <>
    <div style={{ height: '60vh', width: '100%' }} className='rounded-lg'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBqZczuziqKJ_4b_nlis5yNL663clZIveU" }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        defaultZoom={15}
        center={{
          lat: 59.95,
          lng: 30.33

        }}
      >
      </GoogleMapReact>
    </div>
    </>
  )
}

export default Map;