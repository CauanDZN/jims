import styled from "styled-components";

export const Title = styled.div`
  margin-bottom: 2rem;
  .center {
    text-align: center;
  }
`

export const SlideBox = styled.div`
  .swiper-button {
    &-prev,
    &-next {
      top: 37%;
      color: ${({theme}) => theme.colors.light};
      background: ${({theme}) => theme.colors.primary};
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      &:after {
        font-size: 1.3rem;
        margin: 0 -3px 0 -3px;
      }
    }
    &-prev{
      &:after {
        margin: 0 -3px 0 -3px;
      }
    }
  }
`