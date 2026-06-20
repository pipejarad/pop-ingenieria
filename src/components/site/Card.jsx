export default function Card({ children, className = "", interactive = false }) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl p-6 sm:p-7 transition-all duration-200 ${
        interactive
          ? "hover:border-brand/30 hover:shadow-sm hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
