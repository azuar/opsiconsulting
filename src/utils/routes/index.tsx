import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from "../../pages/home";
import MainLayout from "../../component/mainlayout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
