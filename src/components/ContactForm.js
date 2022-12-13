import "../components/ContactFormStyles.css";

function ContactForm() {
  return (
    <>
      <section class="services">
        <div class="container">
          <div class="row">
            <div className="pageName">
              <h1> Get in touch </h1>
            </div>
          </div>

          <div className="form-container">
            <div className="location">
              <a href="/">Address: 69 Street 1st Avenue Konoha&nbsp;</a>
              <a href="/">Email: hokage@date.co.za&nbsp;</a>
              <a href="/">Phone: 012 345 6789&nbsp;</a>
            </div>

            <div className="contactForm">
              <form>
                <input placeholder="Enter your name" />
                <input placeholder="Enter your email address" />
                <textarea placeholder="Type your message" rows="7"></textarea>
                <button type="button" className="btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
