import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<LandingPage />
			</Route>
			<Route path="/game">
				<Dashboard />
			</Route>
		</Switch>
	);
};

export default Routes;
