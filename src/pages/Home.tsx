import { useEffect, useState } from 'react';
import { connect, send } from '../services/wsManager';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

const PREDEFINED_MESSAGES = ['Hello', 'How are you?', 'Ping', 'Good morning'];

export default function Home() {
  const online = useOnlineStatus();
  const [messages, setMessages] = useState<string[]>([]);
  const [draft, setDraft] = useState<string>('');

  useEffect(() => {
    if (!online) return;
    connect((msg: string) => {
      setMessages(prev => [...prev, msg]);
    });
  }, [online]);

  if (!online) {
    return (
      <div className="p-8 text-center text-red-600">
        You are offline
      </div>
    );
  }

  // Helper to send and log self-messages
  const handleSend = (msg: string) => {
    send(msg);
    setMessages(prev => [...prev, `Self: ${msg}`]);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto p-4 h-full gap-4">
      {/* Left column: predefined + custom */}
      <div className="md:w-1/2 space-y-6">
        {/* Predefined messages */}
        <div>
          <h2 className="text-xl font-semibold text-brand-600 mb-2">
            Quick Messages
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {PREDEFINED_MESSAGES.map((msg, idx) => (
              <button
                key={idx}
                className="px-4 py-2 bg-brand-500 text-black border-1 cursor-pointer rounded hover:bg-brand-600 transition"
                onClick={() => handleSend(msg)}
              >
                {msg}
              </button>
            ))}
          </div>
        </div>

        {/* Custom message */}
        <div>
          <h2 className="text-xl font-semibold text-brand-600 mb-2">
            Custom Message
          </h2>
          <div className="flex">
            <input
              type="text"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 px-3 py-2 border rounded-l focus:outline-none"
            />
            <button
              onClick={() => {
                const msg = draft.trim();
                if (msg) {
                  handleSend(msg);
                  setDraft('');
                }
              }}
              className="px-4 py-2 bg-brand-500 text-black border-1 cursor-pointer rounded-r hover:bg-brand-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Right column: chat */}
      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-xl font-semibold text-brand-600 mb-2">
          Chat
        </h2>
        <div className="flex-1 overflow-y-auto border border-gray-200 rounded p-2">
          {messages.length === 0 ? (
            <p className="text-gray-500">No messages yet.</p>
          ) : (
            <ul className="space-y-2">
              {messages.map((m, i) => (
                <li
                  key={i}
                  className={`px-3 py-1 rounded ${m.startsWith('Self:') ? 'bg-blue-100 text-brand-800' : 'bg-gray-100'}`}
                >
                  {m}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
);
}