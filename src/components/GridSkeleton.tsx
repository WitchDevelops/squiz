export const GridSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, index) => (
        <li key={index} className="h-32 bg-gray-300 rounded"></li>
      ))}
    </ul>
  );
};
