import styled from "styled-components";

export const InstructionSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;

	@media (min-width: 1024px) {
		padding: 1em 2em;

		width: 50%;
		height: 100vh;
	}

	h3 {
		font-family: "MuseoModerno", cursive;
		font-size: 2rem;
	}
	ol {
		width: 100%;
		@media (min-width: 425px) {
			width: 80%;
			margin: 0 auto;
		}
	}
	ol > li {
		padding: 0 1em;
		margin-bottom: 1em;
		list-style: lower-alpha;
	}
`;
