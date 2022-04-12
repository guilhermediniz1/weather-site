import { Container, Title } from "./styles";
import { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip } from "recharts";

export function CardGraph({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [hourData, setHourData] = useState([]);

  useEffect(() => {
    setFilteredData(data.filter((el, index) => index % 2 == 0));
  }, [data]);

  useEffect(() => {
    const arr = filteredData.map((el, index) => fillObject(el, index));
    setHourData(arr);
  }, [filteredData]);

  function fillObject(el, index) {
    return {
      time: `${index * 2 < 9 ? "0" + index * 2 : index * 2}h`,
      chuva: el.chance_of_rain,
    };
  }
  return (
    <Container>
      <Title>
        Chance de chuva ao longo do dia <span>(em %)</span>
      </Title>
      <LineChart width={700} height={100} data={hourData}>
        <Line type="monotone" dataKey="chuva" stroke="#5D9CE6" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <Tooltip />
      </LineChart>
    </Container>
  );
}
