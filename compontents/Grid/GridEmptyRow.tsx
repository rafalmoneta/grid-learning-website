//@ts-nocheck
import styled from "styled-components";
import GridRow from "../../elements/GridRow";

// TODO: Edit this file into compontents that take props (height and numbers of rows)
// TODO: Add types

// interface GridEmptyRowProps {
//   height: number;
// }

const GridEmptyRowStyles = styled(GridRow)`
  /* grid-template-rows: [row-1-start] 6rem [row-1-end row-2-start]; */
  grid-template-rows: ${(props) =>
    props?.height
      ? `[row-1-start] ${props?.height} [row-1-end row-2-start]`
      : "[row-1-start] 6rem [row-1-end row-2-start]"};
`;

export default function GridEmptyRow({ height }: { height?: string }) {
  return <GridEmptyRowStyles height={height} />;
}
