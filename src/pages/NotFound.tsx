import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-brand-500 mb-2">404</h2>
      <p className="mb-4">Page not found.</p>
      <Link to="/" className="text-brand-600 hover:underline">Go Home</Link>
    </div>
  );
}