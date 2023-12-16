import { useLoadScript } from "@react-google-maps/api";
import Map from "../Map/Map";
import { Container, Title } from "./Order.styled";
import Loader from "../Loader/Loader";

const Order = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <Loader />;
  return (
    <>
      <Title>Замовити</Title>
      <Container>
        <Map />
      </Container>
    </>
  );
};

export default Order;
