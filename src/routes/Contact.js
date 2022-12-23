import ContactForm from "../components/ContactForm";
import Intro from "../components/Intro";

function Contact() {
  document.body.classList.remove("no-scroll");
  return (
    <>
      <Intro text="Contact" />
      <div className="container">
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
