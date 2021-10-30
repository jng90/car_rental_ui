import classes from './App.module.css';
import AppHeader from "./components/AppHeader";
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AppContentHome from "./components/AppContent";
import AppContentDatabase from "./components/AppContentDatabase";


function App() {
    return (
        <div className={classes.App}>
            <Router>
                <AppHeader/>
                <div className={classes.AppContent}>
                <Switch>
                    <Route path={'/database'}>
                        <AppContentDatabase/>
                    </Route>
                    <Route path={'/'}>
                        <AppContentHome/>
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
