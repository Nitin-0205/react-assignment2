import "../index.css"

const Section = (props) => {
    return (
        <section>
            <div className="card-container">
                <div className="card-img-container">
                    <img className="card-img" src={props.img} alt="Card Image" />
                </div>
                <div className="card-tilt-contain">
                    <h1 className="card-title">{props.title}</h1>
                    <p className='card-desc'>{props.desc}</p>
                    <button className="card-btn">Read More &gt;</button>
                </div>
            </div>
        </section>
    );
}
export default Section;