import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

const HealthForm = () => {
    const [programName, setProgramName] = useState("");
    const [programType, setProgramType] = useState("유산소");
    const [workoutDuration, setWorkoutDuration] = useState("");
    const [intensityLevel, setIntensityLevel] = useState("초급");
    const [programDescription, setProgramDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {};

    return (
        <Container>
            <h1>🏋️‍♂️ 새로운 운동 프로그램 추가</h1>
            <Form>
                <Label>프로그램 이름 *</Label>
                <Input
                    type="text"
                    placeholder="예: 고강도 인터벌 트레이닝"
                    value={programName}
                    onChange={(e) => setProgramName(e.target.value)}
                />

                <Label>운동 유형</Label>
                <Select value={programType} onChange={(e) => setProgramType(e.target.value)}>
                    <option value="유산소">유산소</option>
                    <option value="근력">근력</option>
                    <option value="유연성">유연성</option>
                    <option value="복합">복합</option>
                </Select>

                <Label>운동 시간 (분) *</Label>
                <Input
                    type="number"
                    placeholder="운동 시간을 입력하세요 (예: 45)"
                    value={workoutDuration}
                    onChange={(e) => setWorkoutDuration(e.target.value)}
                />

                <Label>강도</Label>
                <Select value={intensityLevel} onChange={(e) => setIntensityLevel(e.target.value)}>
                    <option value="초급">초급</option>
                    <option value="중급">중급</option>
                    <option value="고급">고급</option>
                </Select>

                <Label>프로그램 설명 *</Label>
                <Textarea
                    placeholder="이 운동 프로그램에 대한 설명을 입력하세요."
                    value={programDescription}
                    onChange={(e) => setProgramDescription(e.target.value)}
                />

                <ButtonContainer>
                    <Button text="추가하기" onClick={handleSubmit} variant="primary" size="large"/>
                    <Button text="취소" onClick={() => navigate("/healths")} variant="outline" size="medium"/>
                </ButtonContainer>
            </Form>
        </Container>
    );
};

export default HealthForm;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    min-height: 100vh;
    background-color: #f4f6f8;
    text-align: center;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: bold;
    margin-top: 10px;
    text-align: left;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    margin-top: 5px;
    border: 2px solid #ddd;
    border-radius: 5px;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    margin-top: 5px;
    border: 2px solid #ddd;
    border-radius: 5px;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 1rem;
    margin-top: 5px;
    border: 2px solid #ddd;
    border-radius: 5px;
    resize: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;
