import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1.063rem;
`;

export const Content = styled.span`
  img {
    display: inline-block;
    position: relative;
    width: 100%;
  }
`;

export const TextOne = styled.h1`
  font-size: 3.25rem;
  font-weight: 300;
  font-style: italic;
  top: 23rem;
  left: 50.5rem;
  position: absolute;
`;

export const TextTwo = styled(TextOne)`
  top: 26.5rem;
  left: 53rem;
`;
