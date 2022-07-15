import styled from "styled-components";
// Needs to be fixed ->
const StyledListItem = styled.li`
color: ${props => props.checked ? "red" : "black"};
text-decoration: ${props => props.checked ? "":"line-through"};
`
export default StyledListItem;
