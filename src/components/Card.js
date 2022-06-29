export default function Card({
  posterImage,
  title,
  year,
  description,
  height,
  width,
}) {
  return (
    <div className=" w-screen md:w-[100%] lg:w-[100%] h-[25rem] p-3 rounded-sm flex flex-col justify-center bg-black">
      <img
        src={posterImage}
        alt="poster"
        className="rounded object-cover w-[100%] h-[50%]"
      />
      <div className="flex flex-row justify-between mt-2">
        <p className=" text-lg text-white">{title}</p>
        <p className="text-white">{year}</p>
      </div>
      <p className="text-white">{description}</p>
    </div>
  );
}
