import React from 'react'
import * as S from './styled';
import { menuLinks } from './data'
import Link from 'next/link';

const Nav = () => {
  return (
    <S.Nav>
      <S.NavList>
        {menuLinks.map((link, index) => (
          <S.NavItem key={index}>
            <Link legacyBehavior href={link.url}>
              <a target='_blank'>{link.title}</a>
            </Link>
          </S.NavItem>
        ))}
      </S.NavList>
    </S.Nav>
  )
}

export default Nav