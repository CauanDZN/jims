import styled from "styled-components";

export const Profile = styled.div`
  display: flex;
  gap: 1.4rem;
`;

export const Box = styled.div`
  position: relative;
  cursor: pointer;

  .icon {
    transition: all 0.4s ease;
  }

  &:hover .icon {
    color: ${({ theme }) => theme.colors.primary};
  }
`;