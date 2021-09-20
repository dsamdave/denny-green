import image1 from '../images/maskGroup1.png';
import image2 from '../images/Rectangle 12.png';
import image3 from '../images/Mask Group.png';
import image4 from '../images/Rectangle 66.png';
import image5 from '../images/Mask Group (2).png';
import image6 from '../images/Mask Group behind.png';

console.log(image1, image2, image3, image4, image5, image6)

const Firstpage = () => {
    return (
        <div className="firstPage">
            <div className="left-side">
                <img src={image1} className="image1" />
                <img src={image2} className="image2" />
                <img src={image3} className="image3" />
            </div>
            <div className="right-side">
                <h1>Advance Learning System <br /> Around The World</h1>
                <p>We have made a collaborative effort in bringing together <br /> scientific expertise from other countries, steered jointly <br /> by their governments on the basis of shared, <br /> policy-driven interests. </p>
                <div className="counter">
                    <div className="teachers">
                        <h1>25k<sup>+</sup></h1>
                        <p>Teachers</p>
                    </div>
                    <div className="active-courses">
                        <h1>74k<sup>+</sup></h1>
                        <p>Active Courses</p>
                    </div>
                    <div className="extra-curricular">
                        <h1>250</h1>
                        <p>Extra Curricular</p>
                    </div>

                </div>
                    <button className="learn-more"> Learn more</button>
                    <img src={image5} className="image5" />
                    <img src={image4} className="image4" />
            </div>
        </div>
    )
}

export default Firstpage
