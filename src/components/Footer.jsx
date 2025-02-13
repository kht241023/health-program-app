import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2025 Health | Powered by React & Spring Boot</p>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #222;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`;
