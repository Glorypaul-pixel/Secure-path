import React from "react";

function Statistic() {
  const [reports, setReports] = React.useState([]);
  const [noMoreFetch, setNoMoreFetch] = React.useState(false);
  const [firstFetch, setFirstFetch] = React.useState(true);

  const fetchLeaderboard = async (reset) => {
    const PAGE_SIZE = 20;
    const newReports = await fetch(
      "https://security-backend-12f1.onrender.com/v1/complaint/all"
    ).then((res) => res.json());
    if (!newReports) return;
    if (newReports?.data?.length < PAGE_SIZE) {
      setNoMoreFetch(true);
    }
    setReports((prev) =>
      (reset ? [] : [...prev]).concat(newReports?.data || [])
    );
    setFirstFetch(false);
  };
  const resetState = async () => {
    setFirstFetch(true);
    setNoMoreFetch(false);
    void fetchLeaderboard(true);
  };

  React.useEffect(() => {
    void resetState();
  }, []);
  let content;
  if (firstFetch) {
    content = (
      <div className="my-8 flex flex-col items-center">
        <h2>Checking for your complaints...</h2>
      </div>
    );
  } else if (reports.length === 0) {
    content = (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-medium">No Complaints Yet</h2>
        <p className="text-grey-200">Your Complaints will show up here</p>
      </div>
    );
  } else {
    // add more content here
    content = (
      <div className="flex flex-col space-y-6 w-full">
        <div>

            <h2 className="text-2xl font-medium">Complaints</h2>
        </div>
        <div
            className="flex flex-row justify-between items-center"
          >
            <div className="flex flex-row items-center">
              <span className="text-2xl font-bold">Report ID</span>
              <span className="text-xl font-medium ml-4">Full name of reporter</span>
            </div>
              <span className="text-xl font-medium ml-4">Location of report</span>
          </div>
        {reports?.map((val, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
          >
            <div className="flex flex-row items-center">
              <span className="text-2xl font-bold">{index + 1}</span>
              <span className="text-xl font-medium ml-4">{val?.reporter?.full_name}</span>
            </div>
            <span className="text-xl font-medium">{val.location}</span>
          </div>
        ))}

        {!noMoreFetch && !firstFetch && (
          <button onClick={() => fetchLeaderboard()} className="mt-12">
            Load more
          </button>
        )}
      </div>
    );
  }
  return <div className="w-3/4 text-white flex flex-col items-center">{content}</div>;
}

export default Statistic;
