import { useParams } from 'react-router-dom';
import './MailboxDetails.css';

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div className="mailbox-details">
      <h2>Mailbox Details</h2>
      <div className="details-container">
        <p><strong>Box Number:</strong> {selectedBox._id}</p>
        <p><strong>Box Owner:</strong> {selectedBox.boxOwner}</p>
        <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
      </div>
    </div>
  );
}

export default MailboxDetails; 