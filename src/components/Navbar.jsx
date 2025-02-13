import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Nav>
            <Logo>MZ HEALTH</Logo>
            <NavLinks>
                <StyledLink to="/">🏠 홈</StyledLink>
                <StyledLink to="/healths">📋 운동 목록</StyledLink>
                <StyledLink to="/healths/add">➕ 새 프로그램</StyledLink>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 20px;
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 60px;
    z-index: 1000;
`;

const Logo = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    color: #00ff99;
    position: absolute;
    left: 20px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 40px;
    position: relative;
`;

const StyledLink = styled(Link)`
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #ff416c;
    }
`;
