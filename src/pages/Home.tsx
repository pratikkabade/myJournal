export const Home = () => {
    const h1 = {
        fontSize: "60px",
    };
    const p = {
        marginTop: "25%",
        fontSize: "30px",
    };
    const a = {
        color: 'white',
        fontSize: "30px",
    };


    return (
        <div className="full skew-down">
            <div className="inskew-down pushDown noSelect flex">
                <h1 style={h1}>Google Calendar Link <i className="fa-regular fa-calendar"></i></h1>
                <p style={p}>Fill out the form below and get the desired link</p>
                <a style={a} href="#form">Scroll Down <i className="fa-solid fa-arrow-down rotateCW "></i></a>
            </div>
        </div>
    )
}
