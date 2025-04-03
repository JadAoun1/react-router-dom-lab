// src/App.jsx

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      ...formData,
      _id: mailboxes.length + 1
    };
    setMailboxes([...mailboxes, newBox]);
  };

  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Post Office</h1>} />
          <Route 
            path="/mailboxes" 
            element={<MailboxList mailboxes={mailboxes} />} 
          />
          <Route 
            path="/new-mailbox" 
            element={<MailboxForm addBox={addBox} />} 
          />
          <Route 
            path="/mailboxes/:mailboxId" 
            element={<MailboxDetails mailboxes={mailboxes} />} 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
