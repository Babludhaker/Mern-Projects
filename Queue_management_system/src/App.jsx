import { useState } from "react";
import "./index.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id != id));
  };
  return (
    <div>
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage Your Customer efficiently</p>
      </header>
      <main className="main-item">
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}

export default App;
