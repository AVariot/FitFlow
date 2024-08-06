import "./Card.css";

export function HomeCard({text, img, link}) {
    return (
        <button className="Outline_Button Home_Cards_Corps">
            <div className="Home_Cards_Title">{text}</div>
            <img className="Home_Cards_Img" style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }} src={img}
            ></img>
        </button>
    );
};
