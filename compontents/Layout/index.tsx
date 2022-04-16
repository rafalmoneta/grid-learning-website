import React from "react";
import styled from "styled-components";
import Head from "../Head";

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: any;
};

const MainContent = styled.main`
  position: relative;
`;

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default Layout;
