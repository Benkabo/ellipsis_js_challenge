import { Link } from "react-router-dom";

import Placeholder from "../assets/placeholder.png";

export default function HomeCard({ name }) {
  return (
    <Link to={name}>
      <div className="mr-3">
        <div className=" w-[11rem] h-[18rem] p-3 text-white bg-black bg-opacity-[0.89] flex flex-col cursor-pointer relative rounded ">
          <img src={Placeholder} alt="placeholder" />
          <h1 className=" uppercase text-[40px] font-medium text-center absolute left-0 right-0 top-[15%]">
            {name}s
          </h1>
        </div>
        <h2 className=" capitalize text-lg font-medium">Popular {name}s</h2>
      </div>
    </Link>
  );
}
