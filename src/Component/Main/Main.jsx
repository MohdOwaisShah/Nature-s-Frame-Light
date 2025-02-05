import "./Main.css"
import Products from "./SubComponents/Products/Products.jsx";
import Faq from "./SubComponents/Faq/Faq.jsx";
import Contact from "./SubComponents/Contact/Contact.jsx";

const Main = () => {

  return (
    <main>
      {/* section-1 */}
      <section className="section-1" id="HOME">
      <div className="sec-1-container">
            <div className="left-container">
                <h2 className="sec-1-text-content">Add a touch of magic with frames that radiate <span className="yellow-color">beauty and peaceful</span> ambiance.</h2>
                <a href="#PRODUCTS"><button className="shop-now-btn">SHOP NOW!</button></a>
            </div>
            <div className="right-container">
                <video src="/videos/frame-main-video.mp4" autoPlay loop muted></video>
            </div>
        </div>
      </section>
      {/* section-2 */}
      <section className="section-2" id="PRODUCTS">
        <Products />
      </section>
      {/* section-3 */}
      <section className="section-3" id="FAQ">
        <Faq/>
      </section>
      {/* section-4 */}
      <section className="section-4" id="CONTACT">
        <Contact />
      </section>
    </main>
  )
}

export default Main