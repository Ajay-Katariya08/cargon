import ca_work_1_1 from "@/assets/img/icon/ca-work-1.1.svg";
import ca_work_1_2 from "@/assets/img/icon/ca-work-1.2.svg";
import ca_work_1_3 from "@/assets/img/icon/ca-work1.3.svg";
import ca_work_1_4 from "@/assets/img/icon/ca-work1.4.svg";
import { Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

interface WorkProcessItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  aosDuration: number;
}

const WorkingProcessSection = () => {
  const workProcessItems: WorkProcessItem[] = [
    {
      id: 1,
      icon: ca_work_1_1,
      title: "Coordination & Execution",
      description:
        "We then coordinate & manage all aspects of transportation, leveraging our global network.",
      aosDuration: 800,
    },
    {
      id: 2,
      icon: ca_work_1_2,
      title: "Planning and Strategy",
      description:
        "Throughout the journey, our team monitors progress in real-time, providing you with updates.",
      aosDuration: 1000,
    },
    {
      id: 3,
      icon: ca_work_1_3,
      title: "Real-Time Monitoring",
      description:
        "Finally, we ensure timely and secure delivery of your goods, followed by a thorough review.",
      aosDuration: 1200,
    },
    {
      id: 4,
      icon: ca_work_1_4,
      title: "Secure Transportation",
      description:
        "Trust our meticulous process to streamline your supply chain and drive your business forward.",
      aosDuration: 1400,
    },
  ];

  return (
    <div className="ca-working-section theme-black-bg-3 pt-390 pb-70">
      <div className="container">
        <div
          className="ca-working-section-3 ca-sec-content-3 text-center mb-60 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h5 className="ca-section-subtitle subtitle-bg-7 p-relative text-white br-50">
            Working Process
          </h5>
          <h2 className="ca-section-title theme-black-3  fnw-600 text-white pt-16">
            Efficient Working Process
          </h2>
          <p className="pt-16">
            Our working process is designed to deliver efficient, reliable, &
            tailored
            <br /> logistics solutions. From the initial consultation to the
            final delivery,
          </p>
        </div>

        <Row>
          {workProcessItems.map((item) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-4 col-md-6 mb-30"
              data-aos="fade-up"
              data-aos-duration={item.aosDuration}
            >
              <div className="ca-work-ic-box br-7 aos-init aos-animate">
                <div className="ca-work-ic-box-img">
                  <span>
                    <Image src={item.icon} alt={item.title} />
                  </span>
                </div>

                <div className="ca-work-ic-box-content">
                  <h4 className="ca-title fnw-600 text-white pt-24 pb-16">
                    <Link to="/services/service">{item.title}</Link>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WorkingProcessSection;
