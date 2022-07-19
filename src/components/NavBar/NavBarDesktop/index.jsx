import { HeaderNavegationStyle, NavegationStyle } from "./style";

const NavBarDesktop = ({ children }) => {
	return (
		<HeaderNavegationStyle>
			<h1>Genius</h1>
			<NavegationStyle>{children}</NavegationStyle>
		</HeaderNavegationStyle>
	);
};

export default NavBarDesktop;
