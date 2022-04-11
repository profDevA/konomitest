export default function Skeleton() {
  return (
    <div className="w-[290px] min-h-min px-5 pr-[14px] bg-card font-ubuntu">
      <div className="flex justify-between h-8 items-center text-xl font-bold">
        <span className="mt-1 ml-2 w-16 rounded bg-gray-400 animate-pulse">&nbsp;</span>
        <span className="flex items-center bg-gray-400 rounded w-32 animate-pulse">
          &nbsp;
        </span>
      </div>
      <div className="flex justify-between items-stretch min-h-[105px] pt-5 pb-4">
        <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full bg-slate-400 animate-pulse">
        </div>
        <div className="flex flex-col justify-evenly items-end">
          <p className="leading-6 bg-gray-400 w-36 rounded animate-pulse">&nbsp;</p>
          <p className="leading-6 bg-gray-400 w-36 rounded animate-pulse">&nbsp;</p>
        </div>
      </div>
    </div>
  );
}
