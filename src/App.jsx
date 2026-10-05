import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="container">
      <h1>Event Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Event</label>
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">Select an event</option>
          <option value="Technical Workshop">Technical Workshop</option>
          <option value="DevOps Seminar">DevOps Seminar</option>
          <option value="Coding Contest">Coding Contest</option>
        </select>

        <button type="submit">Register</button>
      </form>

      {submitted && (
        <p className="success">
          Registration submitted successfully!
        </p>
      )}
    </div>
  )
}

export default App