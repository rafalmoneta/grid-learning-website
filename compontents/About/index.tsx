import styled from "styled-components";
import EmptyBoxWithLine from "../../elements/EmptyBoxWithLine";
import GridRow from "../../elements/GridRow";
import AboutDescription from "./Description";
import AboutHeader from "./Header";
import AboutImageArrow from "./ImageArrow";
import AboutImageDescription from "./ImageDescription";
import AboutSecondDescription from "./SecondDescription";

const AboutStyles = styled(GridRow)`
  grid-template-rows: [row-1-start] min-content [row-1-end row-2-start] min-content [row-2-end row-3-start] min-content [row-3-end row-4-start] min-content [row-4-end row-5-start] min-content [row-5-end row-6-start] min-content [row-6-end row-7-start];
`;

const AboutImage = styled.div`
  grid-row: row-3-start / row-3-end;
  background-color: pink;
  grid-column: col-2-start / col-8-end;
  height: 10rem;

  @media (min-width: 819px) {
    background-color: #fff;
    grid-column: col-9-start / col-12-end;
    grid-row: row-1-start / row-7-end;
    height: 100%;
  }

  @media (min-width: 1220px) {
    grid-column: col-10-start / col-13-end;
  }
`;

const EmptyBox = styled(EmptyBoxWithLine)`
  grid-row: row-2-start / row-2-end;
  grid-column: col-2-start / col-8-end;
`;

export default function About() {
  return (
    <AboutStyles>
      <AboutHeader />
      <EmptyBox />
      <AboutImage />
      <AboutDescription />
      <AboutImageDescription />
      <AboutImageArrow />
      <AboutSecondDescription />
    </AboutStyles>
  );
}
