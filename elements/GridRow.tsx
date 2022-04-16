import styled from "styled-components";

const GridRow = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  width: 100%;
  grid-template-columns: [col-offset-left-start] 0px [col-offset-left-end col-1-start] 3.4375% [col-1-end col-2-start] 8.4375% [col-2-end col-3-start] 20% [col-3-end col-4-start] 20.3125% [col-4-end col-5-start] 7.8125% [col-5-end col-6-start] 12.5% [col-6-end col-7-start] 7.8125% [col-7-end col-8-start] 11.875% [col-8-end col-9-start] 7.8125% [col-9-end col-offset-right-start] 0px [col-offset-right-end];
  grid-template-rows: [row-1-start] auto [row-1-end row-2-start];

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    height: 1px;
    right: 0px;
    left: 0px;
    z-index: 2;
    background-color: #4a4a4a;
  }

  @media (min-width: 820px) {
    grid-template-columns: [col-offset-left-start] 0px [col-offset-left-end col-1-start] 4.09836% [col-1-end col-2-start] 3.85246% [col-2-end col-3-start] 11.4754% [col-3-end col-4-start] 8.27869% [col-4-end col-5-start] 5.16393% [col-5-end col-6-start] 8.60656% [col-6-end col-7-start] 7.54098% [col-7-end col-8-start] 8.60656% [col-8-end col-9-start] 8.52459% [col-9-end col-10-start] 5.08197% [col-10-end col-11-start] 11.3934% [col-11-end col-12-start] 13.2787% [col-12-end col-13-start] 4.09836% [col-13-end col-offset-right-start] 0px [col-offset-right-end];
    /* grid-template-columns: [col-offset-left-start] 1fr [col-offset-left-end col-1-start] 3.125rem [col-1-end col-2-start] 2.9375rem [col-2-end col-3-start] 8.75rem [col-3-end col-4-start] 6.3125rem [col-4-end col-5-start] 3.9375rem [col-5-end col-6-start] 6.5625rem [col-6-end col-7-start] 5.75rem [col-7-end col-8-start] 6.5625rem [col-8-end col-9-start] 6.5rem [col-9-end col-10-start] 3.875rem [col-10-end col-11-start] 8.6875rem [col-11-end col-12-start] 10.125rem [col-12-end col-13-start] 3.125rem [col-13-end col-offset-right-start] 1fr [col-offset-right-end]; */
  }

  @media (min-width: 1220px) {
    grid-template-columns: [col-offset-left-start] 1fr [col-offset-left-end col-1-start] 3.125rem [col-1-end col-2-start] 2.9375rem [col-2-end col-3-start] 8.75rem [col-3-end col-4-start] 6.3125rem [col-4-end col-5-start] 3.9375rem [col-5-end col-6-start] 6.5625rem [col-6-end col-7-start] 5.75rem [col-7-end col-8-start] 6.5625rem [col-8-end col-9-start] 6.5rem [col-9-end col-10-start] 3.875rem [col-10-end col-11-start] 8.6875rem [col-11-end col-12-start] 10.125rem [col-12-end col-13-start] 3.125rem [col-13-end col-offset-right-start] 1fr [col-offset-right-end];
  }
`;

export default GridRow;
