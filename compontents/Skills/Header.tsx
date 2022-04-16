import styled from "styled-components";
import GridRow from "../../elements/GridRow";

const SkillsHeaderStyles = styled(GridRow)`
  /* grid-row: row-1-start / row-1-end; */
`;

const SkillsHeaderContent = styled.div`
  grid-column: col-2-start / col-6-end;
  border-top: none;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  font-weight: bold;
  color: #000;
  background-color: white;
`;

export default function SkillsHeader() {
  return (
    <SkillsHeaderStyles>
      <SkillsHeaderContent>Skills I think I have</SkillsHeaderContent>
    </SkillsHeaderStyles>
  );
}
