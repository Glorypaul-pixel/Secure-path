import "../index.css";
import Image from "../assets/images/about.jpeg";
// import { Input } from "postcss";
import { crime, location } from "../data/_index";
export default function Home() {
  return (
    <div>
      <section
        id="section"
        className="cursor-default relative text-center text-white flex flex-col items- center justify-center Hero"
      >
        <div className="fixed top-0 w-full flex  items-center shadow-inner bg-red-900 bg-opacity-90 p-5 text-white lg:flex-row">
          <div className=" cursor-default font-tino flex  bold tracking-wider items-center w-3/6">
            <h1 className="text-[2rem] font-bold ">Secure Path</h1>
          </div>
          <div className="space-x-8 justify-between w-3/5 flex md:flex-row my-0 mx-auto text-white">
            <a href="#logcomplain">
              <p>Log Complaint</p>
            </a>

            <a href="#about">
              <p>About</p>
            </a>
            <a href="#statistics">
              <p>Statistics</p>
            </a>
            <a href="#contact">
              <p>Contact</p>
            </a>
          </div>
        </div>
        <h2 className="text-5xl font-bold items-center justify-center pt-24">
          Welcome to Secure Path: UNN Edition!
        </h2>
        <p className="text-zinc-400 px-8">
          At Secure Path, we are dedicated to enhancing safety on the University
          of Nigeria, Nsukka campus. Our mission is to keep students, faculty,
          and staff informed about crime hotspots, security measures, and
          effective safety strategies. Together, let cultivate a secure and
          thriving environment for learning at University of Nigeria, Nsukka.
        </p>
      </section>
      <section id="logcomplain">
        <div className="form">
          <form>
            <h1 className=" text-white text-2xl underline-offset-8 underline p-4 log pb-4">
              Log Complain
            </h1>
            <div className="justify-between ">
              <label htmlFor="name" className="text-white">
                Name of Reporter
              </label>
              <input
                className=" flex   "
                type="text"
                placeholder="Name of Reporter"
              />
            </div>
            <div>
              <label className="text-white">Date and time of incident</label>
              <input type="datetime-local" className="flex  date" required />
            </div>
            <div className="location">
              <label htmlFor="state" className="text-white">
                Location
              </label>

              <select id="state" className="" required>
                {location.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="crime">
              <label htmlFor="crime" className="text-white">
                Type of Crime
              </label>
              <select id="crime" required>
                {crime.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
            <div className=" text-white description">
              <label>Description</label>
              <textarea className="textarea" cols="10" rows="3"></textarea>
            </div>
            <div>
              <label className="text-white">Upload a photo or video</label>
              <input type="file" className="text-white file" />
            </div>
            <button type="submit" className="btn">
              Submit Report
            </button>
          </form>
        </div>
      </section>

      <section id="about" className=" mt-12 text-white bg-red-900">
        <div className=" text-white bg-red-900 pt-4 pb-12">
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
              <button type="button" className="bg-red-900 bttn ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section1" id="statistics">
        <div>
          <h1>STATISTICS</h1>
        </div>
      </section>
      <section id="contact">
        <div className="text-red-900 pt-20">
          <h1 className="text-2xl pb-10 underline underline-offset-8 text-center">
            UNN Security Department Contact
          </h1>
          <div className="map pt mb-10 flex justify-between  ml-5 mr-5 leading-8 items-center">
            <div>
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
            <div className="text-red-900 ul">
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
    </div>
  );
}
