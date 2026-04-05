import { useState } from "react";
import "../App.css";
import { FaUserPlus } from "react-icons/fa";
export default function QueueForm({ onAdd }) {
  const [name, setName] = useState();
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    setName("");
    setService("");
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to Queue</h2>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="form-group"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="Consultancy">Consultancy</option>
          <option value="Payment">Payment</option>
          <option value="Supports">Supports</option>
        </select>
        <button type="submit">
          <FaUserPlus className="icons" /> Add Customer
        </button>
      </form>
    </>
  );
}
