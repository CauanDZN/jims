import { Row, Col, Container } from 'react-bootstrap';
import Card from '../Card';

import img from '../../../../public/Roupas (1).jpg'

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
            title="Traje preto" 
            price={parseInt(100)} 
          />
        </Col>
        <Col lg={4}>
          <Card 
            img={img} 
            alt="Descrição da imagem" 
            w="700" 
            h="900" 
            title="Traje preto" 
            price={parseInt(100)} 
          />
        </Col>
        <Col lg={4}>
          <Card 
            img={img} 
            alt="Descrição da imagem" 
            w="700" 
            h="900" 
            title="Traje preto" 
            price={parseInt(100)} 
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Highlights