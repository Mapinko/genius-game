import { useState } from "react";

import Menu from "../../../assets/icons/menu-burger.png";

import { CloseButton, HeaderNavMobile, NavModalMobile } from "./style";

const NavBarMobile = ({ children }) => {
	const [menu, setMenu] = useState(false);

	const handleMenu = () => {
		setMenu(!menu);
	};

	return (
		<HeaderNavMobile>
			<button className="menu-button" onClick={handleMenu}>
				<img src={Menu} alt="Menu Icon" />
			</button>
			<h1>Genius</h1>
			{menu && (
				<NavModalMobile>
					<div className="modalTitle">
						<CloseButton onClick={handleMenu}> x </CloseButton>
						<h2>navegação:</h2>
					</div>
					<div className="link-container">{children}</div>
				</NavModalMobile>
			)}
		</HeaderNavMobile>
	);
};

export default NavBarMobile;
