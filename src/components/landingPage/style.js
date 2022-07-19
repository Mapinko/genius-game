import styled from "styled-components";

export const BodyWrapper = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;
