import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import HealthCard from "../components/HealthCard";

const HealthList = () => {
    const [healthPrograms, setHealthPrograms] = useState([]);


    return (
        <Container>
            <h1>🏋️‍♂️ 운동 프로그램 목록</h1>
            <Grid>

            </Grid>
        </Container>
    );
};

export default HealthList;

const Container = styled.div`
    padding: 80px 20px;
    text-align: center;
    background: #f4f6f8;
    min-height: 100vh;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
`;
