import styled from "styled-components";

const BoxWithLineStyles = styled.div`
  grid-column: col-2-start / col-8-end;
  margin: 1px;
`;

const FakeLine = styled.div`
  position: absolute;
  width: 100vw;
  height: 1px;
  left: 0px;
  z-index: -1;
  border-image: initial;
  border-width: 1px 0px 0px;
  border-top-color: rgba(255, 255, 255);
  border-top-style: solid;
  border-right-style: initial;
  border-right-color: initial;
  border-bottom-style: initial;
  border-bottom-color: initial;
  border-left-style: initial;
  border-left-color: initial;
}
`;

export default function BoxWithLine({ children }: any) {
  return (
    <BoxWithLineStyles>
      {children}
      <FakeLine />
    </BoxWithLineStyles>
  );
}
