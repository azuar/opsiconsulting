import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import MainLayout from "../../component/main-layout";
import MainPages from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPages />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
