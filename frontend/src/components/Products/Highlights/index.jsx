import { Row, Col, Container } from 'react-bootstrap';
import Card from '../Card';

import img from '../../../../public/Roupas (21).jpg'
import img2 from '../../../../public/Roupas (23).jpg'
import img3 from '../../../../public/Roupas (25).jpg'

const Highlights = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card 
            img={img} 
            alt="Descrição da imagem" 
            w="700" 
            h="900" 
            title="Blusa Everything Will be Okay" 
            price={45} 
          />
        </Col>
        <Col lg={4}>
          <Card 
            img={img2} 
            alt="Descrição da imagem" 
            w="700" 
            h="900" 
            title="Blusa Thrasher" 
            price={45} 
          />
        </Col>
        <Col lg={4}>
          <Card 
            img={img3} 
            alt="Descrição da imagem" 
            w="700" 
            h="900" 
            title="Blusa Lakers" 
            price={45} 
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Highlights