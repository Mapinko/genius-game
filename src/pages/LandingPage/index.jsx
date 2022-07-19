import HeaderLandingPage from "../../components/landingPage/HeaderLandingPage";
import HowToPlay from "../../components/landingPage/HowToPlay";
import { BodyWrapper } from "../../components/landingPage/style";

const LandingPage = () => {
	return (
		<BodyWrapper>
			<HeaderLandingPage />
			<HowToPlay />
		</BodyWrapper>
	);
};

export default LandingPage;
