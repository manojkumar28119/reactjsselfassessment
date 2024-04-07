import { HiOutlineLightBulb } from "react-icons/hi";
import { TbPackages } from "react-icons/tb";
import { PiInfinityFill } from "react-icons/pi";



import "./index.css";

const WhyChooseUs = () => (
  <div className="whychooseus-card" id = "WhyChooseUs">
    <h1 className="w-c-u-heading">Why Choose Us?</h1>
    <hr className="hr-line" />
    <div className="w-c-u-content-card">
      <div className="w-c-u-sub-card">
        <HiOutlineLightBulb size={60} className="w-c-u-icon" />
        <p className="content-heading">Expert Faculty</p>
        <p className="w-c-u-content-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="w-c-u-sub-card">
        <TbPackages size={60} className="w-c-u-icon" />
        <p className="content-heading">Complete Success Package</p>
        <p className="w-c-u-content-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="w-c-u-sub-card">
        <PiInfinityFill size={60} className="w-c-u-icon" />
        <p className="content-heading">Placements</p>
        <p className="w-c-u-content-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
     
    </div>
    <div className="features-cards">
        <div className="feature-card">
            <p className="feature-text1">Levels</p>
            <p className="feature-text">dummy data</p>
        </div>
        <div className="feature-card">
            <p className="feature-text1">Duration</p>
            <p className="feature-text">dummy data</p>
        </div>
        <div className="feature-card">
            <p className="feature-text1">Exams</p>
            <p className="feature-text">dummy data</p>
        </div>
        <div className="feature-card">
            <p className="feature-text1">Exemptions</p>
            <p className="feature-text">dummy data</p>
        </div>
    </div>
  </div>
);

export default WhyChooseUs;
