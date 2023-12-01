import { Row, Col, Container } from 'react-bootstrap';
import Card from '../Card';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Heading, Section, TitleBox } from '@/components/All';
import * as S from './styled'

import img1 from '../../../../public/coletes/coletes (1).jpg'
import img2 from '../../../../public/coletes/coletes (2).jpg'
import img3 from '../../../../public/coletes/coletes (3).jpg'
import img4 from '../../../../public/coletes/coletes (4).jpg'

const Coletes = (props) => {
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
            <SwiperSlide>
              <Card
                img={img1}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Colete"
                price={parseInt(100)}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img2}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Colete"
                price={parseInt(100)}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img3}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Colete"
                price={parseInt(100)}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img4}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Colete"
                price={parseInt(100)}
              />
            </SwiperSlide>
          </Swiper>
        </S.SlideBox>
      </Container>
    </Section>
  )
}

export default Coletes