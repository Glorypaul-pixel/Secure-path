import { useReducer } from "react";
import { crime, location } from "../data/_index";
import { v4 as uuidV4 } from "uuid";
import { useState } from "react";
const initialState = {
  full_name: "",
  reported_at: "",
  location: "",
  type: "",
  description: "",
  media: null,
}
export function LogComplaint() {
  const [formState, setFormState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ [name]: value });
  };
  const [submitted, setSubmitted] = useState(false);

  // TODO: Add form validation
  const getDeviceId = () => {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          const videoInput = devices.filter(
            (device) => device.kind === "videoinput"
          );
          if (videoInput.length > 0) {
            resolve(videoInput[0].deviceId);
          } else {
            reject("No video input device found");
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("full_name", formState.full_name);
    formData.append("reported_at", formState.reported_at);
    formData.append("location", formState.location);
    formData.append("type", formState.type);
    formData.append("description", formState.description);
    formData.append("media", formState.media, formState.media.name);
    const deviceId = (await getDeviceId()) || uuidV4();
    console.log(await getDeviceId());
    formData.append("device_id", deviceId);
    const reqObj = {
      method: "POST",
      body: formData,
    };
    fetch(
      "https://security-backend-12f1.onrender.com/v1/complaint/create",
      reqObj
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          setSubmitted(true);
          setFormState(initialState);
          fetch("https://security-backend-12f1.onrender.com/v1/complaint/report-complaint", {
            method: "POST",
            body: JSON.stringify({
              complaint_id: data.data,
              email: 'udochukwukaonyela@gmail.com' // add the email of the recipent here
            }),
            headers: {
              "Content-Type": "application/json",
            },
          
          })
        } else {
          // TODO: Handle error
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section id="logcomplain">
      <div className="form">
        <form
          className="bg-gradient-to-r from-purple-500 to-pink-500"
          onSubmit={handleSubmit}
        >
          <h1 className=" text-white text-2xl underline-offset-8 underline p-4 log pb-4">
            Log Complain
          </h1>
          <div className="justify-between">
            <label htmlFor="name" className="text-white">
              Name of Reporter
            </label>
            <input
              className="flex"
              type="text"
              placeholder="Name of Reporter"
              name="full_name"
              value={formState.full_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white">Date and time of incident</label>
            <input
              type="datetime-local"
              className="flex"
              required
              name="reported_at"
              value={formState.reported_at}
              onChange={handleChange}
            />
          </div>
          <div className="location">
            <label htmlFor="state" className="text-white">
              Location
            </label>

            <select
              id="state"
              className=""
              required
              name="location"
              value={formState.location}
              onChange={handleChange}
            >
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
            <select
              id="crime"
              required
              name="type"
              value={formState.type}
              onChange={handleChange}
            >
              {crime.map((item, idx) => (
                <option key={idx} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
          <div className=" text-white description">
            <label>Description</label>
            <textarea
              className="textarea"
              cols="10"
              rows="3"
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-white">Upload a photo or video</label>
            <input
              type="file"
              className="text-white file"
              name="media"
              onChange={(e) => {
                setFormState({ media: e.target.files[0] });
              }}
              accept="image/*, video/*"
            />
          </div>
          {submitted && (
            // TODO: Better styling
            <div className="text-white p-4">
              successfully
              {/* <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white rounded shadow-lg">
                  <h1 className="text-2xl font-bold mb-4">
                    Submission Successful!
                  </h1>
                  <p className="text-gray-700 mb-4">
                    Your form has been successfully submitted.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Go Back
                  </button>
                </div>
              </div> */}
            </div>
          )}
          <button type="submit" className="btn">
            Submit Report
          </button>
        </form>
      </div>
    </section>
  );
}
