import styled from "styled-components";

const TabButton = styled.button`
background-color: ${props => props.selected ? "black" : "white"};
color: ${props => props.selected ? "white" : "black"};
margin: ${props => props.selected ? "15" : "0"}px;
transition: all 0.5s ease;
height: 50px;
width: 100px;
`
export default TabButton;