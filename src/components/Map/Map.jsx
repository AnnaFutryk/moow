import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react";
import { Wrapp } from "./Map.styled";

const Map = () => {
  const [point, setPoint] = useState();
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 43, lng: -80 }), []);
  const options = useMemo(
    () => ({
      mapId: "66ff9fe55881b8ee",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map) => (mapRef.current = map), []);

  return (
    <Wrapp>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        libraries={["places"]}
      >
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerStyle={{ width: "480px", height: "433px" }}
          options={options}
          onLoad={onLoad}
        />
      </LoadScript>
    </Wrapp>
  );
};

export default Map;
