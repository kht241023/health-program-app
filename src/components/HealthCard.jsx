import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HealthCard = ({ program }) => {
    return (
        <Card
            as={motion.div}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            <h3>{program.programName}</h3>
            <p>💪 유형: {program.programType}</p>
            <p>⏳ 시간: {program.workoutDuration}분</p>
            <p>🔥 강도: {program.intensityLevel}</p>
            <StyledLink to={`/healths/${program.healthProgramId}`}>
                자세히 보기
            </StyledLink>
        </Card>
    );
};

export default HealthCard;

const Card = styled.div`
    background: #ffffff;
    color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }

    h3 {
        font-size: 1.4rem;
        margin-bottom: 10px;
        font-weight: bold;
        color: #ff6b6b;
    }

    p {
        font-size: 1rem;
        color: #bbb;
        margin-bottom: 5px;
    }
`;

const StyledLink = styled(Link)`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background: #00cc66;
    color: black;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease-in-out, color 0.3s;

    &:hover {
        background: #ffcc00;
        color: black;
    }
`;
