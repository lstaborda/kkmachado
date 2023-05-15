import banner from '../assets/banner.svg';
import { Container, Content, TextOne, TextTwo } from './Home.styled';

export function Home() {
  return (
    <Container id='home'>
      <Content>
        <img src={banner} />
        <TextOne>TREINE COM</TextOne>
        <TextTwo>KELLY KAILER</TextTwo>
      </Content>
    </Container>
  );
}