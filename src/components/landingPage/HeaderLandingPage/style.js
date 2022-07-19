import styled from "styled-components";

export const HeaderLanding = styled.header`
	background: #8cbeb2;

	position: relative;

	width: 100%;
	height: 350px;

	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	align-items: center;

	@media (min-width: 1024px) {
		height: 100vh;
		width: 50%;
	}

	h1 {
		text-shadow: 2px 2px black;
		@media (max-width: 425px) {
			margin-top: 30%;
		}
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

	position: absolute;
	top: 0;

	width: 100%;
	padding: 1em;
	margin: 0 auto;

	text-align: center;

	@media (min-width: 768px) {
		position: absolute;
		width: 80%;
		border-radius: 0 0 15px 15px;
	}
`;
