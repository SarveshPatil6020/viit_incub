import "./Service.css";
import Mentor from "/assetss/Ment.png";
import Lib from "/assetss/lib.png";
import Fund from "/assetss/Fund.png"
import IP from "/assetss/IP.png";
import Tuto from "/assetss/Tuto.png";
import Lab from "/assetss/Proto.png";

function Facilities() {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1>Facilities</h1>
        <p className="p__color">
          Embark on your entrepreneurial journey with our state-of-the-art
          incubation center, where innovation thrives amidst a nexus of funding
          linkage support, personalized mentoring, cutting-edge laboratories for
          prototype development, comprehensive training programs, and unwavering
          assistance in IP/Patent filing, all housed within a rich library and
          information resource hub.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box ">
              <div className="icon">
                <img className="img" src={Fund} alt="Fund" />
              </div>
              <div className="service__meta">
                <h1 className="service">Funding Linkage Support</h1>
                <p className="p service__text p__color">
                  Unlock the capital your startup needs to soar. Our incubation
                  center specializes in connecting innovative ideas with the
                  right investors. We'll guide you through the intricate
                  landscape of funding, helping you secure the resources
                  essential for growth and success
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img className="img" src={Mentor} alt="Mentor" />
              </div>
              <div className="service__meta">
                <h1 className="service">Mentoring</h1>
                <p className="p service__text p__color">
                  Success begins with the right guidance. At our incubation
                  center, experienced mentors are your compass in the
                  entrepreneurial journey. Benefit from their wisdom, learn from
                  their experiences, and accelerate your path to success
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img className="img" src={Lab} alt="Lab" />
              </div>
              <div className="service__meta">
                <h1 className="service">
                  Laboratory for Developing Prototypes
                </h1>
                <p className="p service__text p__color">
                  Turn your visions into tangible prototypes in our cutting-edge
                  laboratories. Our state-of-the-art facilities provide the
                  tools and resources to refine your concepts and transform them
                  into real-world innovations."
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img className="img" src={Tuto} alt="Mentor" />
              </div>
              <div className="service__meta">
                <h1 className="service">Training</h1>
                <p className="p service__text p__color">
                  Knowledge is your most powerful asset. Our training programs
                  are designed to equip you with the skills and insights you
                  need to excel in the market. Stay ahead of the curve with our
                  tailored educational resources
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img className="img" src={IP} alt="Mentor" />
              </div>
              <div className="service__meta">
                <h1 className="service">IP/Patent Filing Support</h1>
                <p className="p service__text p__color">
                  Protect your innovations with confidence. We're here to assist
                  you in safeguarding your intellectual property. Our support
                  for patent filing ensures your ideas remain exclusively yours,
                  giving you peace of mind in a competitive world."
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img className="img" src={Lib} alt="Mentor" />
              </div>
              <div className="service__meta">
                <h1 className="service">Library and Information Resources</h1>
                <p className="p service__text p__color">
                  Access a treasure trove of knowledge at your fingertips. Our
                  well-stocked library and information resources provide the
                  information and research materials you need to stay at the
                  forefront of your field."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="house">
        <h1> Our Inherent Skills in</h1>
        <div className="container1">
          <div className="row_1">
            <div className="col_6">
              <div className="color_box pointer">
                <h1 className="service_1">Technology Assessment</h1>
              </div>
            </div>

            <div className="col_6">
              <div className="color_box pointer">
                <h1 className="service_1">Intellectual Property Planning</h1>
              </div>
            </div>

            <div className="col_6">
              <div className="color_box pointer">
                <h1 className="service_1">Business Support Services</h1>
              </div>
            </div>

            <div className="col_6">
              <div className="color_box pointer">
                <h1 className="service_1">
                  Scientific Support in Select Areas
                </h1>
              </div>
            </div>

            <div className="col_6">
              <div className="color_box pointer">
                <h1 className="service_1">
                  Business Planning and Market Feasibility Assessments
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
