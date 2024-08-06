import "./NavbarButtonMobile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export function NavbarButtonMobile() {
    const [Open, setOpen] = useState(false);

    function LatteralNavBar() {
        if (Open) {
            return (
                <>
                    <div className="Lateral_Navbar_Corps">
                        <button className="Latteral_Navbar_Button_Mobile_Corps" onClick={() => {setOpen(!Open)}}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                        <div className="Latteral_Navbar_Button_Direction_Page_Corps">
                            <button className="Latteral_Navbar_Button_Direction_Page_Button">
                                <div className="Latteral_Navbar_Button_Direction_Page_Button_Text">
                                    HOME
                                </div>
                            </button>
                            <button className="Latteral_Navbar_Button_Direction_Page_Button">
                                <div className="Latteral_Navbar_Button_Direction_Page_Button_Text">
                                    TEST
                                </div>
                            </button>
                        </div>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <button className="Navbar_Button_Mobile_Corps" onClick={() => {setOpen(!Open)}}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <LatteralNavBar/>
        </>
    )
}
