import styled from "styled-components";
import {fadeIn} from "react-animations"

const TabContent = styled.p`
height: 300px;
width: 500px;
transition: all 2s ${fadeIn};
border: 1px solid black;
`
export default TabContent;