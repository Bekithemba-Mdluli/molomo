// import AboutImg from "../assets/2.jpg";
import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";
// import Footer2 from "../components/Footer2";
import Intro from "../components/Intro";

function Contact() {
  document.body.classList.remove("no-scroll");
  return (
    <>
      <Intro text="Contact" />
      <div className="container">
        <ContactForm />
      </div>

      {/* <Footer /> */}
      {/* <Footer2 /> */}
    </>
  );
}

export default Contact;
