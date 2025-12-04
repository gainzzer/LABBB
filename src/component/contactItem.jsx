function ContactItem({ index, name, email, onDelete }) {
    return (
      <li>
        {index + 1}. <strong>{name}</strong> — {email}
        <button
          style={{ marginLeft: "10px" }}
          onClick={onDelete}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default ContactItem;
  