import { Row, Col, Container } from 'react-bootstrap';
import Card from '../Card';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Heading, Section, TitleBox } from '@/components/All';
import * as S from './styled'

import img1 from '../../../../public/bodys/bodys (1).jpg'
import img2 from '../../../../public/bodys/bodys (2).jpg'
import img3 from '../../../../public/bodys/bodys (3).jpg'
import img4 from '../../../../public/bodys/bodys (4).jpg'
import img5 from '../../../../public/bodys/bodys (5).jpg'
import img6 from '../../../../public/bodys/bodys (6).jpg'
import img7 from '../../../../public/bodys/bodys (7).jpg'

const Cropped = (props) => {
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
                title="Cropped"
                price={40}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img2}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Cropped"
                price={40}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img3}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Cropped"
                price={40}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img4}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Cropped"
                price={40}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img5}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Cropped"
                price={40}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img6}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Cropped"
                price={40}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                img={img7}
                alt="Descrição da imagem"
                w="700"
                h="900"
                title="Cropped"
                price={40}
              />
            </SwiperSlide>
          </Swiper>
        </S.SlideBox>
      </Container>
    </Section>
  )
}

export default Cropped