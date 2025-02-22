export const GridSkeleton = () => {
  return (
    <ul className="grid-view animate-pulse">
      {[...Array(6)].map((_, index) => (
        <li
          key={index}
          className="bg-gray-300 dark:bg-[#2e2c39] rounded flex flex-col w-full items-center justify-center gap-3 p-4"
        >
          <div className="bg-gray-400 rounded-full w-[60px] h-[60px]"></div>
          <div className="bg-gray-400 rounded h-[1rem] w-[40%]"></div>
          <div className="flex w-full gap-2 items-center justify-center">
            <div className="bg-gray-400 rounded h-[1rem] w-[30%]"></div>
            <div className="bg-gray-400 rounded h-[1rem] w-[30%]"></div>
          </div>
        </li>
      ))}
    </ul>
  );
};
