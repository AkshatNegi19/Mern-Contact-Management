import axios from "axios";

function ContactList({ contacts, fetchContacts }) {
  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:5000/api/contacts/${id}`);
    fetchContacts();
  };

  return (
    <table className="w-full mt-6 border">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Phone</th>
          <th className="p-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c._id}>
            <td className="p-2 border">{c.name}</td>
            <td className="p-2 border">{c.email}</td>
            <td className="p-2 border">{c.phone}</td>
            <td className="p-2 border text-center">
              <button
                onClick={() => deleteContact(c._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;
