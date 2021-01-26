import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/admin" component={Admin} exact={true} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
