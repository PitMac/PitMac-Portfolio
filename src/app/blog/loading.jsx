export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Cargando...</h1>
      <ul className="space-y-6 animate-pulse">
        {Array.from({ length: 3 }).map((_, idx) => (
          <li key={idx} className="space-y-2">
            <div className="h-6 bg-gray-300 rounded w-2/3" />
            <div className="h-4 bg-gray-300 rounded w-1/3" />
          </li>
        ))}
      </ul>
    </div>
  );
}
