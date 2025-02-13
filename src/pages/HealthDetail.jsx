import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Button from "../components/Button";

const HealthDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [program, setProgram] = useState(null);
    const [loading, setLoading] = useState(true);

    if (loading) return <Loading>데이터 불러오는 중...</Loading>;
    if (!program) return <ErrorMessage>데이터가 없습니다.</ErrorMessage>;

    return (
        <Container>
            <Card>
                <h1>🏋️‍♂️ program.programName</h1>
                <Info><strong>📋 운동 유형:</strong>programType</Info>
                <Info><strong>⏳ 운동 시간:</strong> workoutDuration 분</Info>
                <Info><strong>🔥 강도:</strong> intensityLevel</Info>
                <Description>📝 programDescription</Description>
                <ButtonContainer>
                    <Button text="목록으로 돌아가기" onClick={() => navigate("/healths")} variant="secondary" />
                </ButtonContainer>
            </Card>
        </Container>
    );
};

export default HealthDetail;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f6f8;
`;

const Card = styled.div`
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
`;

const Info = styled.p`
    font-size: 1.1rem;
    margin: 10px 0;
`;

const Description = styled.p`
    font-size: 1rem;
    margin-top: 15px;
    color: #555;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
`;

const Loading = styled.div`
    font-size: 1.2rem;
    text-align: center;
    margin-top: 50px;
`;

const ErrorMessage = styled.div`
    font-size: 1.2rem;
    text-align: center;
    color: red;
    margin-top: 50px;
`;
