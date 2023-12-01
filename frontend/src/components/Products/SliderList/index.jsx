import { Row, Col, Container } from 'react-bootstrap';
import Card from '../Card';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Heading, Section, TitleBox } from '@/components/All';
import * as S from './styled'

// Importando as imagens automaticamente
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../../public', false, /\.(jpg)$/));

const SliderList = (props) => {
  return (
    <Section>
      <Container>
        <TitleBox>
          <Heading className="center" type="h2">
            {props.title}
          </Heading>
        </TitleBox>

        <S.SlideBox>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={4}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Card
                  img={img.default}
                  alt="Descrição da imagem"
                  w="700"
                  h="900"
                  title="Calça preta"
                  price={parseInt(100)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SlideBox>
      </Container>
    </Section>
  )
}

export default SliderList