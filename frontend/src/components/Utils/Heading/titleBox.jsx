import * as S from './styled'

const TitleBox = (props) => {
  return <S.TitleBox {...props}>{props.children}</S.TitleBox>
}

export default TitleBox;