import Icon from "../Common/Icon";

function Contact() {
  return (
    <>
      <div className="section-title">
        <div className="eclipse"></div>Contact
      </div>
      <h2 className="section-header">
        The first step to building something magical
      </h2>
      <div className="contact-content">
        <div className="pry-card">
          <div className="need-to-talk">
            <h2>Need to talk?</h2>
            <p>
              Every Big startup begin with a talk and idea -- write me let's
              bring this idea to life
            </p>
          </div>
          <Icon.HiChevronRight />
        </div>
        <div className="contact-form">
          <form
            action="https://formsubmit.co/63cecc4c543d197fef193df82161a3f7"
            method="POST"
          >
            <div className="name-email-form">
              <div className="contact-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enise Godfrey"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="aValidEmailAddress@host.com"
                  required
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label htmlFor="service">Services</label>
              <select name="service" id="service">
                <option value="Select">Select (Optional)</option>
                <option value="full-stack">Full stack</option>
                <option value="frontend">FrontEnd Only</option>
                <option value="backend">BackEnd Only</option>
                <option value="mobileapp">Mobile App</option>
              </select>
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Please provide a detailed description of your request"
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

          <p>Drop me a message, i will typically respond within 24hours</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
