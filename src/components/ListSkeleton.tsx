export const ListSkeleton = () => {
  return (
    <ul className="flex flex-col gap-6 animate-pulse">
      {[...Array(6)].map((_, index) => (
        <li key={index} className="h-16 bg-gray-300 rounded"></li>
      ))}
    </ul>
  );
};
