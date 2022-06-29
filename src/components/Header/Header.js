import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="w-[100%]  bg-blue-600">
        <div className=" container mx-auto flex flex-col  md:flex-row lg:flex-row justicf-center md:justify-between lg:justify-between py-2 ">
          <h1 className=" text-lg font-bold self-center ">DEMO Streaming</h1>
          <div className="flex flex-col md:flex-row lg:flex-row items-center">
            <p className="mr-5">Log in</p>
            <button className=" py-1 px-2 bg-black text-white">
              Start your free trial
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%]  bg-gray-600">
        <div className=" container mx-auto flex flex-col  md:flex-row lg:flex-row justicf-center md:justify-between lg:justify-between py-2 ">
          <h1 className=" text-lg font-medium self-center capitalize text-white">
            Popular {pathname.slice(1) ? pathname.slice(1) : "Titles"}
          </h1>
        </div>
      </div>
    </div>
  );
}
