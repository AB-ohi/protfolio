import './ContactMe.css'

const ContactMe = () => {
  return (
    <div className='mt-[30px]'>
      <h1 className="text-5xl font-bold mb-4 text-center">Contact Me</h1>
      <div className="divider w-[290px] m-auto"></div>
      <div className="md:flex justify-center gap-16 my-10">
        <img className="md:w-1/3 w-full" src="https://i.ibb.co/6bN2FgM/contac.png" alt="" />
        <div className="md:w-1/3 w-full contact-aria">
          <div className="">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Yor name"
              className="inputStyle"
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              placeholder="You Number"
              className="inputStyle"
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="inputStyle"
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">message</span>
            </label>
            <textarea
              type="text"
              name="textarea"
              placeholder="Text Your Massage"
              className="inputText"
            />
          </div>
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
