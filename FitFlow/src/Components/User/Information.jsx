import "./Information.css"

export function Information({verbose, content}) {
    return (
        <div className="Information_Corps">
            {verbose}
            <div className="Information_Field">
                <div className="Information_Bar">
                    {content}
                </div>
            </div>
        </div>
    )
}
