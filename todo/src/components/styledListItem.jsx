import styled from "styled-components";

const StyledListItem = styled.li`
color: ${props => props.checked ? "grey" : "black"};
text-decoration: ${props => props.checked ? "line-through":""};
`
export default StyledListItem;
