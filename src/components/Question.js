import styled from "@emotion/styled";
import { Q } from "../data/q";
import { useState } from "react";

function Question() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({
    EI: 0,
    PJ: 0,
    NS: 0,
    TF: 0,
  });

  const a1Handler = () => {
    console.log("a1");

    setStep(step + 1);
  };

  const a2Handler = () => {
    console.log("a2");

    setStep(step + 1);
  };

  return (
    <Container>
      <Title>{Q[step].title}</Title>
      <ButtonBox>
        <Button onClick={a1Handler}>{Q[step].a1}</Button>
        <Button onClick={a2Handler}>{Q[step].a2}</Button>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #ffc592;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 250px;
  flex-direction: column;
`;

const Title = styled.div``;

const ButtonBox = styled.div`
  display: flex;
  gap: 200px;
`;

const Button = styled.button`
  width: 200px;
  height: 100px;

  border-radius: 21px;
  border: transparent;

  &:hover {
    background-color: violet;
  }
`;

export default Question;
