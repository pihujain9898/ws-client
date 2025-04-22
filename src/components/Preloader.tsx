export default function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="animate-spin h-16 w-16 border-4 border-t-brand-500 rounded-full"></div>
    </div>
  );
}