import { Container, Title, Info, Value } from "./styles";

export function Card({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Info>{children}</Info>
    </Container>
  );
}
