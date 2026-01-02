import { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 ml-[25vw]">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Contact Management App
        </h1>

        <ContactForm fetchContacts={fetchContacts} />
        <ContactList contacts={contacts} fetchContacts={fetchContacts} />
      </div>
    </div>
  );
}

export default App;
