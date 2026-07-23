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
            <span className="contact-eyebrow">Have a project in mind?</span>
            <h2>Let&apos;s build something that matters.</h2>
            <p>
              Great products begin with a thoughtful conversation. Tell me what
              you are building, where you are stuck, and what success looks
              like.
            </p>
          </div>
          <div className="contact-card__footer">
            <span>hello@solob.dev</span>
            <Icon.TbArrowUpRight size={22} />
          </div>
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
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
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
            <button type="submit">
              Send message <Icon.TbArrowUpRight size={17} />
            </button>
          </form>

          <p className="contact-response">
            I typically respond within one business day.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
