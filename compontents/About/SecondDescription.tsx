import styled from "styled-components";
import FakeLine from "../../elements/FakeLine";

const AboutSecondDescriptionBox = styled.div`
  grid-row: row-7-start / row-7-end;
  grid-column: col-2-start / col-8-end;

  @media (min-width: 819px) {
    grid-column: col-2-start / col-7-end;
  }
`;

const AboutSecondDescriptionContent = styled.div`
  background-color: #000;
  padding: 1.5rem;
  margin: 1px;
  margin-bottom: 0;
`;

export default function AboutSecondDescription() {
  return (
    <AboutSecondDescriptionBox>
      <AboutSecondDescriptionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </AboutSecondDescriptionContent>
      <FakeLine />
    </AboutSecondDescriptionBox>
  );
}
