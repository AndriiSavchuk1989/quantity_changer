import styled, { css } from "styled-components";

const QuantityChanger = {};

QuantityChanger.Wrapper = styled.div(({ quantity }) => {
  const displayProp = quantity ? "flex" : "none";
  return css`
    display: ${displayProp};
    height: 16px;
  `;
});

QuantityChanger.Button = styled.button`
  text-align: center;
  width: 50px;
`;

QuantityChanger.DecreaseButton = styled(QuantityChanger.Button)`
  background-color: red;
`;

QuantityChanger.IncreaseButton = styled(QuantityChanger.Button)`
  background-color: green;
`;

QuantityChanger.QuantityView = styled.p`
  width: 50px;
  height: 16px;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export default QuantityChanger;
