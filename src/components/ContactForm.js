import "../components/ContactFormStyles.css";

function ContactForm() {
  return (
    <>
    <div className="nameBar">
        <h1 className="pageName">
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          Get in touch
        </h1>
      </div>

      <div className="form-container">
        <div className="location">
          <a>Address: 69 Street 1st Avenue Konoha&nbsp;</a>
          <a>Email: hokage@date.co.za&nbsp;</a>
          <a>Phone: 012 345 6789&nbsp;</a>
        </div>

        <div className="contactForm">
          <form>
            <input placeholder="Enter your name" />
            <input placeholder="Enter your email address" />
            <textarea placeholder="Type your message" rows="7"></textarea>
            <button type="button" className="btn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
