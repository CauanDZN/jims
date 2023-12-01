import React from 'react'
import { Container } from 'react-bootstrap'
import * as S from './styled';
import { Logo, Nav, HeaderProfile } from '../All';

const Header = () => {
  return (
    <S.Header>
      <Container>
        <Logo />
        <Nav />
        <HeaderProfile />
      </Container>
    </S.Header>
  )
}

export default Header