import { useHistory } from "react-router-dom";
import { ButtonStyle } from "../../Button/style";
import { HeaderLanding, SubtitleContainer } from "./style";

const HeaderLandingPage = () => {
	const history = useHistory();

	const handleButton = () => {
		history.push("/game");
	};

	return (
		<>
			<HeaderLanding>
				<ButtonStyle onClick={handleButton}>Jogar!</ButtonStyle>
				<h1>Genius</h1>
				<SubtitleContainer>
					<h2>O clássico dos anos 80 está de volta!</h2>
				</SubtitleContainer>
			</HeaderLanding>
		</>
	);
};

export default HeaderLandingPage;
