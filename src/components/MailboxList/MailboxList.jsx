import { Link } from 'react-router-dom';
import './MailboxList.css';

function MailboxList({ mailboxes }) {
  return (
    <div className="mailbox-list">
      <h2>Mailboxes</h2>
      <div className="mailboxes-grid">
        {mailboxes.map(mailbox => (
          <Link 
            to={`/mailboxes/${mailbox._id}`} 
            key={mailbox._id}
            className="mail-box"
          >
            {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MailboxList; 