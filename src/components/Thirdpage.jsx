import picture1 from '../images/Group 68.png';
import picture2 from '../images/Group 34.png';

console.log(picture1, picture2)

const Thirdpage = () => {
    return (
        <div className="Thirdpage">
            {/* <div className="grid"> */}
                <div className="text">
                    <h1>Find Out More About <br />Our Learning Experience</h1>
                    <h3>We have built hospitals, arranged doctor appointments  have the diagnose and treat yourem ipsu r aol ad meniam, quis nostrud exercitation.</h3>
                    <p><img src={picture2} alt="" /> Culture in diversity</p>
                    <p><img src={picture2} alt="" /> We have built hospitals, arranged doctor.</p>
                    <p><img src={picture2} alt="" /> We have built hospitals, arranged doctor.</p>
                    <button className="learn-more">Learn more here</button>
                </div>
                 <img src={picture1} className="picture1" />
        </div>
    )
}

export default Thirdpage
