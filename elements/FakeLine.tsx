import styled from "styled-components";

const FakeLine = styled.div`
  position: absolute;
  width: calc(100vw - 1.25rem);
  height: 1px;
  left: 0px;
  z-index: -1;
  border-image: initial;
  border-width: 1px 0px 0px;
  border-top-color: #4a4a4a;
  border-top-style: solid;
  border-right-style: initial;
  border-right-color: initial;
  border-bottom-style: initial;
  border-bottom-color: initial;
  border-left-style: initial;
  border-left-color: initial;
`;

export default FakeLine;
