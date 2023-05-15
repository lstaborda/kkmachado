import { FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1440px;
  height: 8.75rem;
`;

export const Content = styled.section`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
`;

export const LogoContainer = styled.div`
  padding-left: 5.313rem;
`;

export const NavbarContainer = styled.nav`
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  height: 5rem;

  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 3.5rem;
    line-height: 5rem;

    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: var(--pink);
    }

    &:hover::after {
      content: '';
      height: 3px;
      border-radius: 3px;
      width: 50%;
      position: absolute;
      bottom: 1px;
      left: 8px;
      background: var(--pink);
    }

    &.active {
      color: var(--pink);
      font-weight: bold;
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px;
      width: 50%;
      position: absolute;
      bottom: 1px;
      left: 8px;
      background: var(--pink);
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5.313rem;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 1.563rem;
  height: 1.563rem;
`;
