import styled from "styled-components";
import BoxWithLine from "./BoxWithLine";
import FakeLine from "./FakeLine";

const EmptyBox = styled.div`
  grid-column: col-2-start / col-8-end;
`;

const FakeEmptyBox = styled.div`
  height: 3rem;
`;

export default function EmptyBoxWithLine() {
  return (
    <EmptyBox>
      <FakeEmptyBox />
      <FakeLine />
    </EmptyBox>
  );
}
