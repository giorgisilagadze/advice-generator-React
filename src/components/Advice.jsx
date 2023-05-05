import {
  Container,
  AdviceId,
  AdviceTxt,
  Divider,
  DiceButt,
} from "../styled-components/Advice.Styled";

export default function Advice() {
  return (
    <>
      <Container>
        <AdviceId></AdviceId>
        <AdviceTxt></AdviceTxt>
        <Divider src="./images/pattern-divider-mobile.svg" />
      </Container>
      <DiceButt>
        <img src="./images/icon-dice.svg" />
      </DiceButt>
    </>
  );
}
