import classes from "./AppHeader.module.css";
import {Link} from 'react-router-dom'
import logo from "../logo.svg";
import Storage from "@material-ui/icons/Storage";
import AddComment from "@material-ui/icons/AddComment";

const HEADER_BUTTONS = [
    {
        name: 'Home',
        href: '/',
        icon: (<></>),  /*Braj Ikony*/
    },
    {
        name: 'Database', /* link do tablicy z listą rekordów/danych */
        href: '/database',
        icon: (<Storage/>),  /*Braj Ikony*/
    },
    {
        name: 'Form',
        href: '/form',
        icon: (<AddComment/>),
    },
]


const AppHeader = () => {

    const mapToHeaderButton = (buttonInfo) => {
        return (
            //Link zostanie zastapione/zaprezentowany w postaci <a>
            <Link to={buttonInfo.href} className={classes.HeaderMenuButton}>
                {buttonInfo.icon}
                <div>{buttonInfo.name}</div>
            </Link>
        )
    }

    return (
        <header className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
                <img src={logo} className={classes.AppLogo} alt="logo"/>
            </div>
            <div className={classes.HeaderRight}>
                {
                    HEADER_BUTTONS.map(mapToHeaderButton)
                }
            </div>
        </header>
    );

}
export default AppHeader;