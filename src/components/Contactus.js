import "./Contactus.css";

function Contactus() {
  return (
    <div className="cnnt">
      <div className="cnt">
        <h1>Office Address</h1>
        <p>262 West Monipur, Mirpur, Dhaka - 1216</p>
        <p>
          <b>Mobile:</b> +880 1775964184
        </p>
        <p>
          <b>Email: </b>durlovrahman32@gmail.com
        </p>
      </div>

      <div className="form-con">
        <h1>Do you have a message for us?</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contactus;
