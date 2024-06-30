export default function Header({ heading, description }) {
  return (
    <div className="border-b-slate-500 border-b text-center py-3">
      <h2 className="text-3xl font-semibold mb-1">{heading}</h2>
      <p>{description}</p>
    </div>
  );
}
