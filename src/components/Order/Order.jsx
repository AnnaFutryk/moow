import Map from "../Map/Map";
import RouteFormList from "../RouteFormList/RouteFormList";
import { Container, Title } from "./Order.styled";

const Order = () => {
  return (
    <>
      <Title>Замовити</Title>
      <Container>
        <RouteFormList />
        <Map />
      </Container>
    </>
  );
};

export default Order;
