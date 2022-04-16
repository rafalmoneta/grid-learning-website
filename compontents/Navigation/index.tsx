import Link from "next/link";
import styled from "styled-components";
import GridRow from "../../elements/GridRow";

const NavGridRow = styled(GridRow)`
  top: 0px;
  position: fixed;
  z-index: 10;
  background-color: #000;
  border: 1px solid #4a4a4a;
  grid-column: col-1-start / col-12-end;
  grid-template-rows: [row-1-start] 4rem [row-1-end row-2-start];
`;

const NavElement = styled.div`
  position: relative;
  z-index: 0;
  margin-left: -1px;
  border: 1px solid white;
  border-top: none;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
`;

const NavHome = styled(NavElement)`
  grid-area: row-1-start / col-2-start / row-1-end / col-3-end;

  @media (min-width: 1220px) {
    grid-area: row-1-start / col-1-start / row-1-end / col-3-end;
  }
`;

const NavContact = styled(NavElement)`
  display: none;

  @media (min-width: 820px) {
    display: flex;
    grid-area: row-1-start / col-6-end / row-1-end / col-12-end;
    background-color: black;
  }

  @media (min-width: 1220px) {
    grid-area: row-1-start / col-9-end / row-1-end / col-13-end;
  }
`;

const NavBlog = styled(NavElement)`
  display: none;

  @media (min-width: 820px) {
    display: flex;
    grid-area: row-1-start / col-4-start / row-1-end / col-6-end;
  }

  @media (min-width: 1220px) {
    grid-area: row-1-start / col-7-end / row-1-end / col-9-end;
  }
`;

const NavEmpty = styled(NavElement)`
  display: none;

  @media (min-width: 1220px) {
    display: flex;
    grid-area: row-1-start / col-3-end / row-1-end / col-7-end;
  }
`;

const NavMobileMenu = styled(NavElement)`
  grid-area: row-1-start / col-3-end / row-1-end / col-8-end;
  background-color: black;

  @media (min-width: 820px) {
    display: none;
  } ;
`;

export default function Nav(): JSX.Element {
  return (
    <NavGridRow>
      <NavHome>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
      </NavHome>
      <NavEmpty />
      <NavBlog>
        <Link href="/" passHref>
          <a>Blog</a>
        </Link>
      </NavBlog>
      <NavContact>
        <Link href="#contact" passHref>
          <a>Let's work together</a>
        </Link>
      </NavContact>
      <NavMobileMenu>
        <span>Menu</span>
      </NavMobileMenu>
      {/* <NavHome>Hello</NavHome> */}
    </NavGridRow>
  );
}
