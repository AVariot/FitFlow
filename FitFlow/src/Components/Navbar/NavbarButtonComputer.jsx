import { useNavigate } from 'react-router-dom';
import "./NavbarButtonComputer.css";

export function NavbarButtonComputer({ text, link }) {
    const navigate = useNavigate();

    return (
        <button className="Navbar_Button_Computer_Corps" onClick={() => {navigate(link)}}>
            {text}
        </button>
    );
};
