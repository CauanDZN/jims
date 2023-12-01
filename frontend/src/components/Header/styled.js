import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.light};

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-family: ${({ theme }) => theme.fonts.font2};
    font-size: ${({ theme }) => theme.sizes.h4};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    text-decoration: none;
  }
`;