import styled from "styled-components";
import GridRow from "../../elements/GridRow";

const HeaderStyles = styled.div`
  background-color: #000;
  position: relative;
  margin: 1px;
  grid-column: col-2-start / col-8-end;

  h1 {
    font-size: 2.5rem;
    padding: 1rem;
    text-transform: uppercase;
  }

  @media (min-width: 820px) {
    grid-column: col-2-start / col-12-end;

    h1 {
      font-size: 3.5rem;
    }
  }
`;

const HeaderGridRow = styled(GridRow)``;

const HeaderOutline = styled.span`
  display: block;
  line-height: 4.75rem;
  font-size: 4.75rem;
  margin: 0.25rem 0;
  margin-left: -0.5vmin;
  color: black;
  -webkit-text-stroke: 0.5px #fff;

  @media (min-width: 720px) {
    line-height: 8.75rem;
    font-size: 8.75rem;
  }
`;

export default function HomeHeader() {
  return (
    <HeaderGridRow>
      <HeaderStyles>
        <h1>
          Hi, my name is <br /> <HeaderOutline>LOREM IPSUMY</HeaderOutline>
          I'm Freelance Web Developer
        </h1>
      </HeaderStyles>
    </HeaderGridRow>
  );
}
