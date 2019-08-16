import styled from 'styled-components';

export const StyledDisplay = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin: 0 0 10px 0;
	padding: 7px;
	min-height: 30px;
	width: 100%;
	border-radius: 20px;
	color: ${(props) => (props.gameOver ? 'red' : '#000')};
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 0.8rem;
`;

export const StyledLabel = styled.div`
	flex-grow: 1;
	text-align: right;
`