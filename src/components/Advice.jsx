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

  useEffect(() => {
    const getApi = (async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const info = response.data;

      setData(info);
      console.log(info);
    })();
  }, []);

  return (
    <>
      <Container>
        <AdviceId>ADVICE #{data?.slip.id}</AdviceId>
        <AdviceTxt></AdviceTxt>
        <Divider src="./images/pattern-divider-mobile.svg" />
      </Container>
      <DiceButt>
        <img src="./images/icon-dice.svg" />
      </DiceButt>
    </>
  );
}
