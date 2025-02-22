export const ListSkeleton = () => {
  return (
    <ul className="list-view animate-pulse">
      {[...Array(6)].map((_, index) => (
        <li key={index} className=" bg-gray-300 dark:bg-[#2e2c39] rounded flex company-list-item">
          <div className="bg-gray-400 rounded-full w-[30px] h-[30px]"></div>
          <div className="company-list-item__content">
            <div className="bg-gray-400 rounded h-[1rem]"></div>
            <div className="bg-gray-400 rounded h-[1rem]"></div>
          </div>
          <div className="bg-gray-400 rounded h-[1rem] w-full"></div>
        </li>
      ))}
    </ul>
  );
};
