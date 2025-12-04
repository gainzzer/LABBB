import ContactItem from "./contactItem.jsx";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <h3>Contacts:</h3>

      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ol>
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              index={index}
              name={contact.name}
              email={contact.email}
              onDelete={() => onDeleteContact(index)}
            />
          ))}
        </ol>
      )}
    </div>
  );
}

export default ContactList;
