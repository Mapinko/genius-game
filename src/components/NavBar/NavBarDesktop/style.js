import styled from "styled-components";
export const HeaderNavegationStyle = styled.header`
	display: none;
	@media (min-width: 768px) {
		background: #8cbeb2;

		display: flex;
		flex-direction: column-reverse;
		align-items: center;

		width: 100%;
		padding: 0 1em;
	}
`;

export const NavegationStyle = styled.nav`
	display: none;

	@media (min-width: 768px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1em;

		margin: 5% auto 0;
	}
`;
