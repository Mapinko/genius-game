import { useHistory } from "react-router-dom";
import { ButtonStyle } from "../../components/Button/style";
import NavBarDesktop from "../../components/NavBarDesktop";

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
		</>
	);
};

export default Dashboard;
