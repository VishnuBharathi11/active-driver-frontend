import { useState} from "react";
import Navbar from '../components/Navbar'
import Ddb from '../assets/images/ddb.jpg'

function DriverDashboard() {
  const [requests, setRequests] = useState(() => {
    const data = localStorage.getItem("requests");
    return data ? JSON.parse(data) : [];
  });

  const acceptRequest = (id) => {
    const updatedReqs = requests.map((req, index) =>
      index === id ? { ...req, status: "In Progress" } : req
    );
    setRequests(updatedReqs);
    localStorage.setItem("requests", JSON.stringify(updatedReqs));
  };

  return (
    <>
      <Navbar/>
      <div className="login-container-u">
        <div className="form-video">
          <div className="animation">
            <img src={Ddb} alt="Loading..." />
          </div>
          <div className="form">
            <h2>Driver Dashboard</h2>
          <div className="available-requests">
            <h3>Available Requests</h3>
              {requests.filter((req) => req.status === "Pending").length === 0 ? (
              <p>No requests available</p>
            ):(
            <ul>
              {requests.map((req, index) =>
                req.status === "Pending" ? (
                  <li key={index}>
                    <p>
                      <strong>{req.name}</strong> - {req.vehicle}, {req.days} days
                    </p>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Pickup:</span> {req.pickup} | <span style={{ fontWeight: "bolder" }}>Drop:</span> {req.drop} | <span style={{ fontWeight: "bolder" }}>Contact:</span> {req.contact}
                    </p>
                    <div className="ud-b">
                      <button onClick={() => acceptRequest(index)}>Accept</button>
                    </div>
                  </li>
                ) : null
              )}
            </ul>
          )}
        </div>
        <div className="my-jobs">
          <h3>My Jobs</h3>
          {requests.filter((req) => req.status === "In Progress").length === 0 ? (
            <p>No jobs accepted yet</p>
          ) : (
            <ul>
              {requests
                .filter((req) => req.status === "In Progress")
                .map((job, index) => (
                  <li key={index}>
                    <p>
                      {job.name} - {job.vehicle}, {job.days} days
                    </p>
                    <p>
                      <span style={{ fontWeight: "bolder" }}>Pickup:</span> {job.pickup} | <span style={{ fontWeight: "bolder" }}>Drop:</span> {job.drop} | <span style={{ fontWeight: "bolder" }}>Contact:</span> {job.contact}
                    </p>
                    <p><span style={{ fontWeight: "bolder" }}>Status:</span> {job.status}</p>
                  </li>
                ))}
            </ul>
          )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default DriverDashboard;
