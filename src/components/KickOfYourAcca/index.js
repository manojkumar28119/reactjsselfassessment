import ReactPopUp from "../ReactPopup";

import "./index.css";

const KickOfYourAcca = () => (
  <div className="become-acc-card">
    <div className="acc-card-1">
      <h1 className="acca-heading">
        Kick of your ACCA Prep Journey with IndigoLearn
      </h1>
      <p className="acca-desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div>
        <button type="button" className="acc-btn-2">
          dummy btn 2
        </button>
      </div>
    </div>
    <div className="acc-card-2">
      <p className="card-2-text">
        Applying to be an ACCA? Get in touch with us!
      </p>
      <input type="text" className="input" placeholder="Enter Your Name" />
      <input type="email" className="input" placeholder="Email ID" />
      <input type="number" className="input" placeholder="Mobile Number" />
      <select className="input">
        <option name="gender">Male</option>
        <option name="gender">Female</option>
      </select>
      <ReactPopUp />
    </div>
  </div>
);

export default KickOfYourAcca;
