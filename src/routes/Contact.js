import ContactForm from "../components/ContactForm";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

function Contact() {
  document.body.classList.remove("no-scroll");
  return (
    <>
      <Intro text="Contact" />
      <div className="container">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
