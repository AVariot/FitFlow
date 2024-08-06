import "./User.css"
import { Information } from "../Components/User/Information"
import { useNavigate } from "react-router-dom"

export function User() {

    console.log(navigator.userAgent);

    function Content() {
        return (
            <div className="User_Information_Corps">
                <Information verbose="Nom" content="contqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"/>
                <Information verbose="Prenom" content="cont"/>
            </div>
        )
    }

    return (
        <>
            <div className="User_Corps_Computer">
                <Content/>
            </div>
            <div className="User_Corps_Mobile">
                <Content/>
            </div>
        </>
    )
}
