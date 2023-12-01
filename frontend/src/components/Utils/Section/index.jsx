import * as S from './styled'

const Section = (props) => {
  return (
    <S.Section 
      {...props}
      className={`${props.className || 'section'}`}
    >
      {props.children}
    </S.Section>
  )
}

export default Section