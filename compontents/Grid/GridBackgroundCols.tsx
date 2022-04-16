import styled from "styled-components";
import GridRow from "../../elements/GridRow";

const GridBackground = styled.div`
  position: absolute;
  inset: 0px;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const GridBackgroundContainer = styled(GridRow)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const GridBorderThin = styled.div`
  border: 0px solid #4a4a4a;
  border-right-width: 1px;

  @media (max-width: 819px) {
    &:nth-child(15n-1),
    &:nth-child(15n-2),
    &:nth-child(15n-3) {
      display: none;
    }
  }

  @media (max-width: 819px) {
    &:nth-child(15n-4),
    &:nth-child(15n-5) {
      border-right-width: 0px;
    }
  }
`;

const GridBorder1 = styled(GridBorderThin)`
  grid-area: row-1-start / col-offset-left-start / row-1-end /
    col-offset-left-end;
`;

const GridBorder2 = styled(GridBorderThin)`
  grid-area: row-1-start / col-1-start / row-1-end / col-1-end;
`;

const GridBorder3 = styled(GridBorderThin)`
  grid-area: row-1-start / col-3-start / row-1-end / col-3-end;
`;

const GridBorder4 = styled(GridBorderThin)`
  grid-area: row-1-start / col-4-start / row-1-end / col-4-end;
`;

const GridBorder5 = styled(GridBorderThin)`
  grid-area: row-1-start / col-5-start / row-1-end / col-5-end;
`;
const GridBorder6 = styled(GridBorderThin)`
  grid-area: row-1-start / col-6-start / row-1-end / col-6-end;
`;
const GridBorder7 = styled(GridBorderThin)`
  grid-area: row-1-start / col-7-start / row-1-end / col-7-end;
`;
const GridBorder8 = styled(GridBorderThin)`
  grid-area: row-1-start / col-8-start / row-1-end / col-8-end;
`;
const GridBorder9 = styled(GridBorderThin)`
  grid-area: row-1-start / col-9-start / row-1-end / col-9-end;
`;
const GridBorder10 = styled(GridBorderThin)`
  grid-area: row-1-start / col-10-start / row-1-end / col-10-end;
`;
const GridBorder11 = styled(GridBorderThin)`
  grid-area: row-1-start / col-11-start / row-1-end / col-11-end;
`;

const GridBorder12 = styled(GridBorderThin)`
  grid-area: row-1-start / col-12-start / row-1-end / col-12-end;
`;

const GridBorder13 = styled(GridBorderThin)`
  grid-area: row-1-start / col-13-start / row-1-end / col-13-end;
`;

const GridBorder14 = styled(GridBorderThin)`
  grid-area: row-1-start / col-offset-right-start / row-1-end /
    col-offset-right-end;
`;

export default function GridBackgroundCols() {
  return (
    <GridBackground>
      <GridBackgroundContainer>
        <GridBorder1 />
        <GridBorder2 />
        <GridBorder3 />
        <GridBorder4 />
        <GridBorder5 />
        <GridBorder6 />
        <GridBorder7 />
        <GridBorder8 />
        <GridBorder9 />
        <GridBorder10 />
        <GridBorder11 />
        <GridBorder12 />
        <GridBorder13 />
        <GridBorder14 />
      </GridBackgroundContainer>
    </GridBackground>
  );
}
