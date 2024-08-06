import "./Home.css";
import seance_img from "../Ressources/img/Home/Seance.jpg";

import { HomeCard } from "../Components/Home/Card";

export function Home() {
    const getDayOfWeek = () => {
        const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        const today = new Date();
        const dayIndex = today.getDay();
        return daysOfWeek[dayIndex];
    };

    return (
        <>
            <div className="Home_Corps_Computer">
                <HomeCard text="Entrainement du jour" img={seance_img}/>
                <HomeCard text="Entrainement du jour" img={seance_img}/>
            </div>
            <div className="Home_Corps_Mobile">
                <HomeCard text="Entrainement du jour" img={seance_img}/>
                <HomeCard text="Recette du jour" img={seance_img}/>
            </div>
        </>
    );
};
