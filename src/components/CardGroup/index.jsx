import { Container } from "./styles";
import { Card } from "../Card";

export function CardGroup({ data }) {
  return (
    <Container>
      <Card title="Humidade">{data.humidity}%</Card>
      <Card title="Vento">{data.wind}m/h</Card>
      <Card title="Precipitação">{data.precipitation}mm</Card>
      <Card title="UV Index">{data.uvIndex}</Card>
      <Card title="Sensação Térmica">{data.feelsLike} °C</Card>
      <Card title="Chance de Chuva">{data.chanceOfRain}%</Card>
    </Container>
  );
}
