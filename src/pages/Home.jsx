import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    return (
        <Container>
            <h1>🏋️‍♂️ 운동 프로그램 관리 시스템</h1>
            <LinkButton to="/healths">운동 프로그램 목록 보기</LinkButton>
            <LinkButton to="/healths/add">새 운동 프로그램 추가</LinkButton>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    text-align: center;
    padding-top: 100px;
    color: #000000;
`;

const LinkButton = styled(Link)`
    display: inline-block;
    margin: 10px;
    padding: 12px 20px;
    background: #dbe9ff;
    color: #294527;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
        background: #8ebaff;
    }
`;
