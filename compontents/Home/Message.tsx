import styled from "styled-components";
import GridRow from "../../elements/GridRow";

const HomeMessageGridRow = styled(GridRow)`
  /* grid-template-rows: [row-1-start] auto [row-1-end row-2-start] auto [row-2-end]; */
`;

const HomeMessageStyles = styled.div`
  background-color: #000;
  padding: 1.5rem;
  margin: 1px;
  grid-column: col-4-start / col-8-end;
  /* font-size: 1.6rem; */
  br {
    display: none;
  }

  @media (min-width: 700px) {
    br {
      display: block;
    }
  }

  @media (min-width: 820px) {
    display: flex;
    grid-column: col-4-start / col-10-end;
  }
`;

const HomeMessageArrowDown = styled.div`
  grid-column: col-2-start / col-3-end;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
  padding: 0.5rem;
`;

const HomeMessageArrowLeft = styled(HomeMessageArrowDown)`
  display: none;

  @media (min-width: 820px) {
    display: flex;
    grid-column: col-11-start / col-11-end;
  }
`;

export default function HomeMessage() {
  return (
    <HomeMessageGridRow>
      <HomeMessageArrowDown>
        <svg
          width="85"
          height="38"
          viewBox="0 0 85 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.382 7.37096C58.962 6.82895 34.754 3.94295 10.45 1.73795C10.104 11.4889 9.76199 21.0589 8.38199 30.7049"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.146 26.78C11.425 29.105 10.798 33.383 7.744 36.261C6.698 33.234 4.301 27.191 1.619 25.148"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HomeMessageArrowDown>
      <HomeMessageStyles>
        Welcome on my personal space on the Internet. <br /> I hope you find
        something useful there. <br /> Looking forward to hear from you!
      </HomeMessageStyles>
      <HomeMessageArrowLeft>
        <svg
          width="20"
          height="86"
          viewBox="0 0 20 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9107 1.00002C18.3185 25.8322 17.3682 52.0102 19.1609 76.7822C14.8763 76.9532 10.5423 76.8448 6.24008 76.8448"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.38078 68.508C7.32558 72.9876 3.54402 73.7436 0.999993 77.419C3.67573 78.6783 9.01747 81.564 10.8234 84.7927"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HomeMessageArrowLeft>
    </HomeMessageGridRow>
  );
}
