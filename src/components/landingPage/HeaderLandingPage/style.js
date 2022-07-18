import styled from "styled-components";

export const HeaderLanding = styled.header`
	background: #8cbeb2;

	height: fit-content;
	width: 100%;

	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	align-items: center;

	@media (min-width: 1024px) {
		position: relative;

		height: 100vh;
		width: 50%;
	}

	h2 {
		color: #5c4b51;
		text-transform: uppercase;

		@media (max-width: 760px) {
			font-size: 1rem;
		}
	}
`;

export const SubtitleContainer = styled.div`
	background: #f3b462;

	position: relative;
	top: 0;

	width: 100%;
	padding: 1em;
	margin: 0 auto;

	text-align: center;

	@media (min-width: 1024px) {
		position: absolute;
		width: 80%;
		border-radius: 0 0 15px 15px;
	}
`;
