import classes from './App.module.css';
import AppHeader from "./components/AppHeader";
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className={classes.App}>
            <AppHeader/>
        </div>
    );
}

export default App;
