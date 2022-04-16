import styled from "styled-components";
import GridRow from "../../elements/GridRow";
// import EmptyBoxWithLine from "../../elements/EmptyBoxWithLine";

const SkillsStyles = styled(GridRow)``;

const SkillBox = styled.div`
  grid-column: col-2-start / col-8-end;
  background-color: #000;
  margin-right: 1px;
  margin-bottom: 3rem;
  border-bottom: 1px solid #fff;
  h3 {
    border-top: 0.5rem solid #fff;
    border-bottom: 1px solid #fff;
    margin: 0;
    padding: 1rem;
  }

  p {
    margin: 0;
    padding: 1rem;
  }
`;

const SkillBoxWeb = styled(SkillBox)`
  grid-column: col-2-start / col-8-end;

  @media (min-width: 819px) {
    grid-column: col-2-start / col-4-end;
    margin-bottom: 0;
  }

  @media (min-width: 1220px) {
    grid-column: col-2-start / col-5-end;
  }
`;

const SkillBoxMarketing = styled(SkillBox)`
  grid-column: col-2-start / col-8-end;

  @media (min-width: 819px) {
    grid-column: col-6-start / col-9-end;
    margin-bottom: 0;
  }

  @media (min-width: 1220px) {
    grid-column: col-7-start / col-9-end;
  }
`;

const SkillBoxDesign = styled(SkillBox)`
  grid-column: col-2-start / col-8-end;

  @media (min-width: 819px) {
    grid-column: col-11-start / col-12-end;
    margin-bottom: 0;
  }

  @media (min-width: 1220px) {
    grid-column: col-11-start / col-13-end;
  }
`;

export default function Skills() {
  return (
    <SkillsStyles>
      <SkillBoxWeb>
        <h3>Web Development</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mi
          consectetur, fringilla risus placerat, convallis eros. Vestibulum
          tincidunt finibus est a volutpat.
        </p>
      </SkillBoxWeb>
      {/* <EmptyBoxWithLine /> */}
      <SkillBoxMarketing>
        <h3>Marketing and Branding</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mi
          consectetur, fringilla risus placerat, convallis eros. Vestibulum
        </p>
      </SkillBoxMarketing>
      <SkillBoxDesign>
        <h3>UX/UI Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non mi
          consectetur, fringilla risus placerat, convallis eros. Vestibulum
          tincidunt finibus est a volutpat.
        </p>
      </SkillBoxDesign>
    </SkillsStyles>
  );
}
