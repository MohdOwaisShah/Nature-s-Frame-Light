import SocialMediaIcon from '../Main/UI-elments/SocialMediaIcon'
import './Footer.css'
const Footer = () => {

  return (
    <footer>
        {/* footer-navigation */}
        <div className="pages">
            <h3 className='footer-heading'>PAGES</h3>
            <li><a href="#PRODUCTS">SHOP</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#CONTACT">CONTACT</a></li>
        </div>
        {/* footer-icons */}
        <div className="footer-social-media">
            <h3 className='footer-heading'>SOCIAL MEDIA</h3>
            <SocialMediaIcon textColor={"#9C784A"} textHoverColor={"#D8A25E"} textSize={"1.4rem"} textGap={"1.6rem"}/>
        </div>
        {/* footer-copyright-&-logo */}
        <div className="footer-logo-copyright">
            <h2><a href="#HOME">Nature’s <span className='Maroon-color'>Light</span><span className='yellow-color'> Frames</span></a></h2>
            <p><i class="fa-regular fa-copyright"/> Copyright claim 2024</p>
        </div>
    </footer>
  )
}

export default Footer