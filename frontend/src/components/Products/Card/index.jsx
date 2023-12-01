import * as S from './styled';
import Image from 'next/image';
import { Eye, Link } from '@styled-icons/feather';

const Card = (props) => {
  return (
    <S.Card>
      <S.Box className='card-box'>
        <Image 
          className='img-fallback'
          src={props.img}
          alt={props.alt}
          layout='responsive'
          width={props.w}
          height={props.h}
        />
      </S.Box>

      <S.Actions className='card-actions'>
        <S.Icon>
          <Eye size={70} className='icon' />
          <Link size={70} className='icon' />
        </S.Icon>
      </S.Actions>

      <S.Content>
        <S.Title>{props.title}</S.Title>
        <S.Price>R$ {props.price}</S.Price>
      </S.Content>
    </S.Card>
  )
}

export default Card