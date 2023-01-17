import { useEffect, useState } from 'react';

const { kakao } = window;

const Map = () => {
  const [addresses, setAddresses] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      console.log(lat);
      console.log(lng);
      getAddress(lat, lng);
    });
  }, []);

  function getAddress(lat, lng) {
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);
    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const address = result[0].road_address?.region_2depth_name;
        console.log(address);
        setAddresses(address)
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }
};

export default Map;
