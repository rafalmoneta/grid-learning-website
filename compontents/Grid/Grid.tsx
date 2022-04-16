import styled from "styled-components";

export const GridWrapper = styled.div`
  padding-top: 4rem;
  min-height: calc(100vh - 4.5rem);
`;

export const MainContainer = styled.main`
  position: relative;
`;

export default function Grid({ children }: { children: any }) {
  return (
    <GridWrapper>
      <MainContainer>{children}</MainContainer>
    </GridWrapper>
  );
}
