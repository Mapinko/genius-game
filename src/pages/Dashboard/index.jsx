import { ButtonStyle } from "../../components/Button/style";
import NavBarDesktop from "../../components/NavBarDesktop";

const Dashboard = () => {
	return (
		<>
			<NavBarDesktop>
				<ButtonStyle>Regras</ButtonStyle>
				<ButtonStyle>Login</ButtonStyle>
				<ButtonStyle>Criar Conta</ButtonStyle>
			</NavBarDesktop>
		</>
	);
};

export default Dashboard;
