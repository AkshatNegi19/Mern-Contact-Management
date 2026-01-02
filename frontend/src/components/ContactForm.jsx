import { useState } from "react";
import axios from "axios";

function ContactForm({ fetchContacts }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email address";
    if (!form.phone.trim()) err.phone = "Phone is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await axios.post(
        "https://mern-contact-backend.onrender.com/api/contacts",
        form
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setSuccess("Contact added successfully!");
      setErrors({});
      fetchContacts();
    } catch (error) {
      console.error(error);
      setSuccess("");
      alert("Failed to submit contact. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="space-y-3">
      <input
        className="w-full border p-2 rounded"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        className="w-full border p-2 rounded"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Message (optional)"
        value={form.message}
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
      />

      <button
        disabled={loading}
        className="w-full font-bold text-3xl bg-blue-600 text-black p-2 rounded border border-black disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}

export default ContactForm;
