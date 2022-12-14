import "../components/ContactFormStyles.css";

function ContactForm() {
  return (
    <section className="contact">
      <div className="container">
        <div className="pageName">
          <h2> Get in touch </h2>
          <span className="ruler"></span>
        </div>

        <div className="form-container">
          <div className="location">
            <p>
              Address:{" "}
              <a href="https://www.google.co.za/maps/place/Krost+Shelving+PTY+Ltd+JHB/@-26.2625734,28.1948994,15.89z/data=!4m5!3m4!1s0x1e951a0f82682dcd:0x65b794f2fa6e714b!8m2!3d-26.2597689!4d28.1952563">
                69 Street 1st Avenue Konoha&nbsp;
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto: hokage@date.co.za">hokage@date.co.za&nbsp;</a>
            </p>

            <p>
              Phone: <a href="tel:0123456799">+27 12 345 6789&nbsp;</a>
            </p>
          </div>

          <form className="contactForm">
            <input placeholder="Enter your name" />
            <input placeholder="Enter your email address" />
            <textarea placeholder="Type your message" rows="7"></textarea>
            <div className="btn-container">
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
