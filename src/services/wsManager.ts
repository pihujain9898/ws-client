import { toast } from 'react-hot-toast';

let ws: WebSocket | null = null;

// these will always be strings (or undefined) coming from import.meta.env
const rawUrl = import.meta.env.VITE_WS_URL;
const rawChannel = import.meta.env.VITE_WS_CHANNEL;
const rawInterval = import.meta.env.VITE_WS_CONNECT_INTERVAL;

// fallback if you forgot to define them
if (!rawUrl) {
  throw new Error('VITE_WS_URL is not defined in your environment');
}
if (!rawChannel) {
  console.warn('VITE_WS_CHANNEL is not defined — defaulting to "default"');
}

// parse them into the right types
const url = rawUrl!;
const channel = rawChannel || "default";
const reconnectInterval = Number.isNaN(Number(rawInterval))
  ? 5000
  : parseInt(rawInterval!, 10);

export function connect(onMessage: (msg: string) => void) {
  // ensure you use the proper protocol prefix if your URL came in as "http://"
  let wsUrl = url;
  if (url.startsWith('http://')) {
    wsUrl = url.replace(/^http:\/\//, 'ws://');
  } else if (url.startsWith('https://')) {
    wsUrl = url.replace(/^https:\/\//, 'wss://');
  }

  ws = new WebSocket(`${wsUrl}/?channel=${encodeURIComponent(channel)}`);

  ws.onopen = () => {
    toast.success('WebSocket connected');
  };
  ws.onmessage = (e) => onMessage(e.data);
  ws.onclose = (e) => {
    toast.error(`WebSocket disconnected (${e.code})`);
    // try to reconnect
    setTimeout(() => connect(onMessage), reconnectInterval);
  };
  ws.onerror = () => {
    // trigger close so onclose handles the reconnect
    ws?.close();
  };
}

export function send(msg: string) {
  if (ws?.readyState === WebSocket.OPEN) {
    ws.send(msg);
  } else {
    console.warn('WebSocket not open—cannot send message', msg);
  }
}
