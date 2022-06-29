// social images
import fb from "../../assets/social/facebook-white.svg";
import Twitter from "../../assets/social/twitter-white.svg";
import Instagram from "../../assets/social/instagram-white.svg";

// store images
import apple from "../../assets/store/app-store.svg";
import android from "../../assets/store/play-store.svg";
import window from "../../assets/store/windows-store.svg";

export default function footer() {
  return (
    <footer className=" w-full bg-black">
      <div className="container mx-auto">
      <div className=" mx-8 py-8 md:mx-auto lg:mx-auto flex flex-col">
        <div >
          <p className=" text-white mt-5">
            Home | Terms and Condition | Privacy Policy | Collection Statement |
            Help | Manage Account
          </p>
          <p className=" text-slate-300 mt-4">
            © Copyright 2022 Demo Streaming. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center md:justify-between lg:justify-between mt-10">
          <div className="flex">
            <a href="#facebook">
              <img src={fb} alt="facebook" className="h-[2rem] mr-4" />
            </a>
            <a href="#twitter">
              <img src={Twitter} alt="twitter" className="h-[2rem] mr-4" />
            </a>
            <a href="#instagram">
              <img src={Instagram} alt="instagram" className="h-[2rem]" />
            </a>
          </div>
          <div className="flex mt-8">
            <a href="#apple">
              <img src={apple} alt="apple" className="h-[2rem]" />
            </a>
            <a href="#android">
              <img src={android} alt="android" className="h-[2rem] ml-4" />
            </a>
            <a href="#window">
              <img src={window} alt="window" className="h-[2rem] ml-4" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
