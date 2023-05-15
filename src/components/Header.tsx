import {
  Container,
  Content,
  InstagramIcon,
  LogoContainer,
  NavbarContainer,
  SocialContainer,
} from './Header.styled';
import logo from '../assets/logo.svg';
import {Link} from 'react-scroll';

export function Header() {

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }


  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
        <NavbarContainer>
          <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>INÍCIO</Link>
          <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>SOBRE</Link>
          <Link to="works" spy={true} smooth={true} offset={-50} duration={500}>SERVIÇOS</Link>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>CONTATO</Link>
        </NavbarContainer>
        <SocialContainer>
          <InstagramIcon />
        </SocialContainer>
      </Content>
    </Container>
  );
}
