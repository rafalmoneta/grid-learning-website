import styled from "styled-components";
import FakeLine from "../../elements/FakeLine";

const AboutImageDescriptionBox = styled.div`
  grid-row: row-6-start / row-6-end;
  grid-column: col-2-start / col-8-end;
  display: none;
  @media (min-width: 819px) {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: col-6-start / col-7-end;
    background-color: #000;
    margin-top: 1px;
    margin-right: 1px;
  }
`;

export default function AboutImageArrow() {
  return (
    <AboutImageDescriptionBox>
      <svg
        width="130"
        height="15"
        viewBox="0 0 130 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11.1319C5.05047 7.36237 8.90293 4.58692 14.1415 7.61593C17.6342 9.63553 19.0742 14.3791 23.565 12.8231C28.2425 11.2036 29.5626 3.92124 35.2262 3.20081C41.1932 2.44175 42.952 8.88774 46.9301 11.7614C56.4099 18.6115 64.1566 1.07013 74.2571 7.98781C78.4057 10.8301 79.4433 13.4703 85.0691 12.5575C89.6379 11.8153 93.8132 8.35486 98.5865 8.64947C101.577 8.83381 103.55 10.2505 106.672 10.009C112.217 9.5816 117.941 7.32615 123.523 6.56387C124.273 5.97384 123.326 6.52281 123.084 6.5687"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M121.617 11.7412C123.23 8.59947 126.618 7.8066 128.721 5.16156C126.222 4.52807 121.213 3.01397 119.393 1"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <FakeLine />
    </AboutImageDescriptionBox>
  );
}
