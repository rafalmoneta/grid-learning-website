import styled from "styled-components";
import FakeLine from "../../elements/FakeLine";

const AboutImageDescriptionBox = styled.div`
  grid-row: row-6-start / row-6-end;
  grid-column: col-2-start / col-8-end;

  @media (min-width: 819px) {
    grid-column: col-2-start / col-5-end;
  }
`;

const AboutImageDescriptionContent = styled.div`
  background-color: #000;
  padding: 1.5rem;
  margin: 1px;
  margin-bottom: 0;
`;

export default function AboutImageDescription() {
  return (
    <AboutImageDescriptionBox>
      <AboutImageDescriptionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mi
        consectetur, fringilla risus placerat.
      </AboutImageDescriptionContent>
      <FakeLine />
    </AboutImageDescriptionBox>
  );
}
