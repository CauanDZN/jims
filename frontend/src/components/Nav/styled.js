import styled from "styled-components";

export const Nav = styled.nav`
  
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
    transition: ease 0.4s all;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

