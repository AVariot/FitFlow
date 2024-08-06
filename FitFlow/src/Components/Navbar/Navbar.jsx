import "./Navbar.css";

import { NavbarButtonMobile } from './NavbarButtonMobile';
import { NavbarButtonComputer } from "./NavbarButtonComputer";

import { faBars } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {

    function Button() {
        return (
            <>
                <div className="Navbar_Button_Phone">
                    <NavbarButtonMobile />
                </div>
                <div className="Navbar_Buttons_Computer">
                    <NavbarButtonComputer text="HOME" link="/"/>
                    <NavbarButtonComputer text="USER" link="/user/info/"/>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="Navbar_Corps">
                <Button/>
                <div className="Navbar_Title">
                    FitFlow
                </div>
            </div>
        </>
    );
};
