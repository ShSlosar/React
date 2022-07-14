import styled from "styled-components";
// Needs to be fixed ->
const StyledListItem = styled.li`
color: ${props => props.checked ? "black" : "red"};
text-decoration: ${props => props.checked ? "line-through":""};
`
export default StyledListItem;
