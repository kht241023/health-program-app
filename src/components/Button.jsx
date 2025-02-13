import styled from "styled-components";
import { motion } from "framer-motion";

const Button = ({ text, onClick, variant = "primary", size = "medium" }) => {
    return (
        <StyledButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant={variant}
            size={size}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    );
};

export default Button;

// 🎨 스타일 정의 (MZ 스타일 버튼)
const StyledButton = styled.button`
    display: inline-block;
    padding: ${(props) =>
    props.size === "small" ? "8px 12px" :
        props.size === "large" ? "12px 24px" : "10px 18px"};
    font-size: ${(props) =>
    props.size === "small" ? "0.85rem" :
        props.size === "large" ? "1.2rem" : "1rem"};
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    
    background: ${(props) =>
    props.variant === "primary" ? "linear-gradient(90deg, #ff416c, #ff4b2b)" :
        props.variant === "secondary" ? "#00ff99" :
            props.variant === "outline" ? "transparent" : "#222"};

    color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#fff"};
    
    border: ${(props) =>
    props.variant === "outline" ? "2px solid #fff" : "none"};

    &:hover {
        opacity: 0.8;
    }
`;
