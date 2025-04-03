import { useNavigate } from 'react-router-dom';
import './MailboxForm.css';

function MailboxForm({ addBox }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      boxOwner: e.target.boxOwner.value,
      boxSize: e.target.boxSize.value
    };
    addBox(formData);
    navigate('/mailboxes');
  };

  return (
    <div className="mailbox-form">
      <h2>Create New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="boxOwner">Box Owner:</label>
          <input
            type="text"
            id="boxOwner"
            name="boxOwner"
            required
          />
        </div>
        <div>
          <label htmlFor="boxSize">Box Size:</label>
          <select id="boxSize" name="boxSize" required>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
}

export default MailboxForm; 