import { useHistory } from "react-router-dom";
import { ButtonStyle } from "../../components/Button/style";
import { Links } from "../../components/Links/style";
import NavBarDesktop from "../../components/NavBar/NavBarDesktop";
import NavBarMobile from "../../components/NavBar/NavBarMobile";

const Dashboard = () => {
	const history = useHistory();

	const handlePage = (route) => {
		history.push(route);
	};

	return (
		<>
			<NavBarDesktop>
				<ButtonStyle onClick={() => handlePage("/")}>
					Regras
				</ButtonStyle>
				<ButtonStyle>Login</ButtonStyle>
				<ButtonStyle>Criar Conta</ButtonStyle>
			</NavBarDesktop>

			<NavBarMobile>
				<Links>Regras</Links>
				<Links>Login</Links>
				<Links>Criar Conta</Links>
			</NavBarMobile>
		</>
	);
};

export default Dashboard;
