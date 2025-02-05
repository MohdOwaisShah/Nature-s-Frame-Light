import Heading from '../../UI-elments/Heading'
import SocialMediaIcon from '../../UI-elments/SocialMediaIcon'
import './Contact.css'

const Contact = () => {
    return (
        <div className='sec-4-container'>
            <Heading text={"CONTACT"} />

            <div className="form-container">
                <form>
                    <div className="name-input-box">
                        <label for='name'>Name</label>
                        <input type="text" id='name' />
                    </div>
                    <div className="email-input-box" >
                        <label for='email'>Email</label>
                        <input type="email" id='email' />
                    </div>
                    <div className="message-box" >
                        <label for='message'>Problem</label>
                        <textarea id="message"></textarea>
                    </div>
                    <button className='submit-btn'>Submit</button>
                </form>
                <div className="form-text-content">
                    <h2>Nature’s Light Frames</h2>
                    <p>Have questions? We’re here to help! Fill out the form on the left, or contact us directly!</p>
                    <a href='mailto:example123@gmail.com' className='contact-email'>example123@gmail.com</a>
                    <br />
                    <a href='tel:+919136837381' className='contact-number'>+91-9136837381</a>
                    <SocialMediaIcon textColor={"#A04747"} textSize={"1.2rem"} textGap={"0.7rem"}/>
                </div>
            </div>
        </div>
    )
}

export default Contact