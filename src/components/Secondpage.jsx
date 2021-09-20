import pic1 from '../images/Mask Group layer.png';
import pic2 from '../images/Group 64.png';
import pic3 from '../images/Group 65.png';
import pic4 from '../images/Group 66.png';
import pic5 from '../images/Group 67.png';


console.log(pic1, pic2, pic3, pic4, pic5)

const Secondpage = () => {
    return (
        <div className="secondpage">
            <img src={pic1} className="pic1"/>
            <div className="secondpage-text">
            <h1>Our Features</h1>
            <p>Dinny Green International School is nurtured in grace and truth, raising green, flourishing and successful children.</p>
            <div className="grid">
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Secondpage
