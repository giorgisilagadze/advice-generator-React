import { useEffect, useState } from "react";
import {
  Container,
  AdviceId,
  AdviceTxt,
  Divider,
  DiceButt,
} from "../styled-components/Advice.Styled";
import axios from "axios";

export default function Advice() {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const info = response.data;
    setData(info);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <AdviceId>ADVICE #{data?.slip.id}</AdviceId>
        <AdviceTxt>{data?.slip.advice}</AdviceTxt>
        <Divider src="./images/pattern-divider-mobile.svg" />
      </Container>
      <DiceButt onClick={getData}>
        <img src="./images/icon-dice.svg" />
      </DiceButt>
    </>
  );
}
