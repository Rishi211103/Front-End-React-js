import React, { useState, useEffect } from "react";

function Reactdata() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // Load data from local storage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("users"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  // Add or Update Data
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    if (editId !== null) {
      setData(
        data.map((item) =>
          item.id === editId ? { id: editId, name, email } : item
        )
      );
      setEditId(null);
    } else {
      setData([...data, { id: Date.now(), name, email }]);
    }

    setName("");
    setEmail("");
  };

  // Edit Data
  const handleEdit = (item) => {
    setName(item.name);
    setEmail(item.email);
    setEditId(item.id);
  };

  // Delete Data
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  return (
    <div style={styles.container}>
      <h2>React JS Data Management Application</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">No Records Found</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    style={styles.editBtn}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// Inline Styling
const styles = {
  container: {
    width: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    fontFamily: "Arial",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  editBtn: {
    background: "green",
    color: "white",
    border: "none",
    padding: "5px 10px",
    marginRight: "5px",
    cursor: "pointer",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Reactdata;
