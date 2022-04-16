import styled from "styled-components";
import EmptyBoxWithLine from "../../elements/EmptyBoxWithLine";
import FakeLine from "../../elements/FakeLine";
import GridRow from "../../elements/GridRow";

const ContactStyles = styled(GridRow)`
  grid-template-rows: [row-1-start] min-content [row-1-end row-2-start] min-content [row-2-end row-3-start] min-content [row-3-end row-4-start] min-content [row-4-end row-5-start] min-content [row-5-end row-6-start] min-content [row-6-end row-7-start];
`;

const ContactBox = styled.div`
  grid-row: row-6-start / row-6-end;
  background-color: #000;
  margin-right: 1px;
  margin-bottom: 0;
  grid-column: col-2-start / col-8-end;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h3 {
    margin: 0;
  }

  @media (min-width: 819px) {
    /* background-color: #fff; */
    grid-column: col-9-start / col-12-end;
    grid-row: row-1-start / row-3-end;
    height: 100%;
  }

  @media (min-width: 1220px) {
    grid-column: col-10-start / col-13-end;
  }
`;

const ContactBoxTop = styled.div`
  padding: 1rem;
  text-align: center;
`;

const ContactBoxBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #4a4a4a;
  border-bottom: 1px solid #4a4a4a;
  min-height: 70px;
`;

const ContactBoxBottomImage = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;

const ContactBoxBottomLabel = styled.div`
  padding-left: 1rem;
`;

const ActivityBox = styled.div`
  grid-row: row-1-start / row-1-end;
  grid-column: col-2-start / col-8-end;
  background-color: #000;

  /* padding: 1.5rem; */
  margin-right: 1px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #4a4a4a;

  @media (min-width: 819px) {
    grid-column: col-2-start / col-7-end;
  }
`;

const ActivityBoxImage = styled.div`
  background-color: #fff;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
`;

const ActivityBoxLabel = styled.div`
  padding-left: 1rem;
  /* display: none; */
`;

const ActivityBox2 = styled(ActivityBox)`
  grid-row: row-2-start / row-2-end;
`;

const ActivityBox3 = styled(ActivityBox)`
  grid-row: row-3-start / row-3-end;
`;

export default function Contact() {
  return (
    <ContactStyles>
      <ContactBox id="contact">
        <ContactBoxTop>
          I am currently open for any propostion or project, so let's make
          something special and have a little fun along the way!
        </ContactBoxTop>
        <ContactBoxBottom>
          <ContactBoxBottomLabel>Send me an message!</ContactBoxBottomLabel>
        </ContactBoxBottom>
      </ContactBox>
      <ActivityBox>
        <ActivityBoxImage>
          <img src="/pizza.png" />
        </ActivityBoxImage>
        <ActivityBoxLabel>Let's grab a bite of pizza!</ActivityBoxLabel>
        {/* <FakeLine /> */}
      </ActivityBox>
      <ActivityBox2>
        <ActivityBoxImage>
          <img src="/dancing.png" />
        </ActivityBoxImage>
        <ActivityBoxLabel>Let's grab a bite of pizza!</ActivityBoxLabel>
      </ActivityBox2>
      <ActivityBox3>
        <ActivityBoxImage>
          <img src="/beer.png" />
        </ActivityBoxImage>
        <ActivityBoxLabel>Let's grab a bite of pizza!</ActivityBoxLabel>
      </ActivityBox3>
    </ContactStyles>
  );
}
