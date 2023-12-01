import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  position: relative;

  &:hover {
    img: {
      transform: scale(1.1);
    }

    .card-box {
      &:after {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    .card-actions {
      opacity: 1;
      top: 50%;
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  img {
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
  }

  &:after {	
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 4;
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
  }
`;

export const Actions = styled.div`
  position: absolute;
  width: 100%;
  top: 70%;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
  transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
  gap: 1rem;
  transform: translateY(-50%);
`;

export const Icon = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 0.4s all;

  .icon {
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: ease 0.4s all;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.sizes.text1};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 300;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.sizes.text2};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;