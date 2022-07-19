import styled from "styled-components";

export const HeaderNavMobile = styled.header`
	position: relative;

	background: #8cbeb2;

	width: 100%;

	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.5rem;

	@media (min-width: 768px) {
		display: none;
	}

	.menu-button {
		border-radius: 50%;
		padding: 2%;
		max-width: 35px;
		max-height: 35px;

		background-color: #f2ebbf;
	}
`;
export const CloseButton = styled.button`
	background-color: #f2ebbf;
	color: #f06060;

	font-size: 1rem;
	width: 30px;
	height: 30px;
	border-radius: 50px;
	padding: 0;

	&:hover {
		background-color: #f06060;
		color: #f2ebbf;
	}
`;

export const NavModalMobile = styled.nav`
	.modalTitle {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;

		gap: 1rem;
		width: 100%;

		h2 {
               margin-top: 35px;
			font-family: "MuseoModerno", cursive;
			letter-spacing: 3px;
		}
	}

	z-index: 9999;
	position: absolute;
	left: 0;
	top: 50px;

	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-between

	max-width: 70%;
	min-width: 55%;
	padding: 1em;
	height: ${(props) => (props.Height ? `${props.Height}` : "40vh")};

	background: #f3b462;

	border-radius: 0 15px 15px 0;

	@media (min-width: 768px) {
		display: none;
	}

	.link-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;
