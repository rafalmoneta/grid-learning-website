import styled from "styled-components";
import FakeLine from "../../elements/FakeLine";

const AboutDescriptionBox = styled.div`
  grid-row: row-2-start / row-2-end;
  grid-column: col-2-start / col-8-end;

  @media (min-width: 819px) {
    grid-column: col-2-start / col-7-end;
    grid-row: row-4-start / row-4-end;
  }
`;

const AboutDescriptionContent = styled.div`
  background-color: #000;
  padding: 1.5rem;
  margin: 1px;
  margin-bottom: 0;
`;

export default function AboutDescription() {
  return (
    <AboutDescriptionBox>
      <AboutDescriptionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mi
        consectetur, fringilla risus placerat, convallis eros. Vestibulum
        tincidunt finibus est a volutpat.
      </AboutDescriptionContent>
      <FakeLine />
    </AboutDescriptionBox>
  );
}
