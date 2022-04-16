import styled from "styled-components";
import Box from "../../elements/Box";
import BoxWithLine from "../../elements/BoxWithLine";
import FakeLine from "../../elements/FakeLine";
import GridRow from "../../elements/GridRow";

const AboutHeaderBox = styled.div`
  grid-row: row-1-start / row-1-end;
  grid-column: col-2-start / col-6-end;
`;

const AboutHeaderContent = styled.div`
  border-top: none;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  font-weight: bold;
  color: #000;
  background-color: white;
`;

export default function AboutHeader() {
  return (
    <AboutHeaderBox>
      <AboutHeaderContent>About Me</AboutHeaderContent>
      <FakeLine />
    </AboutHeaderBox>
  );
}
