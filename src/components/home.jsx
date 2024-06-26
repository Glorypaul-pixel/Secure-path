import "../index.css";
import Image from "../assets/images/about.jpeg";
import { useEffect } from "react";
import { LogComplaint } from "./LogComplaint";
// no node declaration should be outside
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
// onscroll should be in a useEffect
// renders on every clean up
// window.onscroll = () => {
//   sections.forEach((sec) => {
//     // use const when applicable
//     const top = window.scrollY;
//     const offset = sec.offsetTop - 150;
//     const height = sec.offsetHeight;
//     // dont't select element when applicable
//     const id = sec.getAttribute("id");
//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         // This is react why are you using querySelector
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };
const handleScroll = () => {
  sections.forEach((sec) => {
    // use const when applicable
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    // dont't select element when applicable
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        // This is react why are you using querySelector
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
export default function Home() {
  useEffect(() => {
    // render only once
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <section
        id="section"
        className="cursor-default relative text-center text-white flex flex-col items- center justify-center"
      >
        <div id="home" className="Hero pt-32">
          <h2 className="   text-5xl font-bold items-center justify-center pt-24">
            Welcome to Secure Path: UNN Edition!
          </h2>
          <p className="text-zinc-400 px-8">
            At Secure Path, we are dedicated to enhancing safety on the
            University of Nigeria, Nsukka campus. Our mission is to keep
            students, faculty, and staff informed about crime hotspots, security
            measures, and effective safety strategies. Together, const cultivate
            a secure and thriving environment for learning at University of
            Nigeria, Nsukka.
          </p>
        </div>
      </section>
      <LogComplaint />
      <section
        id="about"
        className=" mt-12 text-white bg-gradient-to-r from-purple-500 to-pink-500"
      >
        <div className=" text-white pt-4 pb-12">
          <h1 className="text-center text-2xl mt-16 ">ABOUT PAGE</h1>
          <p className="text-sm pb-8 text-center">
            Securing school environments through proactive crime prevention with
            our advanced hotspot analysis software.
          </p>
          <div className=" flex justify-center items-center">
            <div className="image">
              <img src={Image} alt="" />
            </div>
            <div className="text  text-white">
              <p>
                Welcome to Secure Path, your innovative solution for deterring
                crime hotspots within the University of Nigeria, Nsukka (UNN).
                At Secure Path, we are committed to enhancing safety and
                security on campus by leveraging advanced technology and data
                analysis to identify and address areas prone to criminal
                activities. Our Mission At Secure Path, our mission is to create
                a safer environment for students, faculty, and staff at UNN by
                proactively
                {/* identifying and deterring crime hotspots on campus. We believe that
            everyone deserves to feel safe and secure in their learning and
            working environment, and we are dedicated to using technology to
            achieve this goal. Our Approach Secure Path takes a data-driven
            approach to crime deterrence, using advanced algorithms and
            analytics to identify patterns and trends in criminal activities. By
            analyzing various factors such as location, time, and frequency of
            incidents, we can pinpoint potential crime hotspots and implement
            targeted strategies to deter criminal behavior. What We Offer Secure
            Path offers a range of innovative solutions to deter crime hotspots
            and enhance security on campus: Crime Hotspot Analysis: We utilize
            data analytics to identify areas on campus that are prone to
            criminal activities, allowing campus security authorities to
            allocate resources effectively. Predictive Modeling: Our predictive
            modeling algorithms forecast potential crime hotspots based on
            historical data, enabling proactive measures to prevent incidents
            before they occur. Commitment to Safety: At Secure Path, safety is
            our top priority, and we are dedicated to making UNN a safer place
            for everyone. Get Started Today Take the first step towards a safer
            campus environment. Contact Secure Path today to learn more about
            our crime hotspot deterrence solutions and how we can help enhance
            security at the University of Nigeria, Nsukka. Secure Path -
            Enhancing Campus Safety through Innovation */}
              </p>
              <button type="button" className="text-purple-700 bttn ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section1" id="statistics">
        <div>
          <h1>STATISTICS</h1>
        </div>
      </section> */}
      <section id="contact">
        <div className="text-white pt-20">
          <h1 className="text-2xl pb-10 underline underline-offset-8 text-center">
            UNN Security Department Contact
          </h1>
          <div className="map pt mb-10 flex justify-between  ml-5 mr-5 leading-8 items-center">
            <div className="unn-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.800632128541!2d7.4115263!3d6.866602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044e7defeff9725%3A0xffb8a28c30660e7d!2sUniversity%20of%20Nigeria%2C%20UNN%20Nsukka!5e0!3m2!1sen!2sng!4v1713743702994!5m2!1sen!2sng"
                width={400}
                height={300}
                style={{ border: 0 }}
                allowfullscreen={""}
                loading={"lazy"}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-white ul">
              <ul>
                <li>University of Nigeria Security Department,</li>
                <li>Adjacent Main gate, UNN.</li>
                <li>
                  HOTLINES=07030395891,08034638857,08037517228,08037336538
                </li>
                <li>Duty Room No.: 07030395891</li>
                <li>C.S.O phone No.: 08034638857</li>
                <li>Q.I.U (Quick Intervention Unit).: 08037517228</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 p-6"></section>
    </div>
  );
}
