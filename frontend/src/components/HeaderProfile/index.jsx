import React from 'react'
import * as S from './styled';
import { Search, User } from '@styled-icons/feather';
import { Handbag } from '@styled-icons/bootstrap';
import Link from 'next/link';

const HeaderProfile = () => {
  return (
    <S.Profile>
      <S.Box>
        <Search size={30} className='icon' />
      </S.Box>
      <S.Box>
        <User size={30} className='icon' />
      </S.Box>
      <S.Box>
        <Handbag size={30} className='icon' />
      </S.Box>
    </S.Profile>
  )
}

export default HeaderProfile