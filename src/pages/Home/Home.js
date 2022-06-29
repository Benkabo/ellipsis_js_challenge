import HomeCard from "../../components/HomeCard";

export default function Home() {
  return (
    <div className=" container mx-auto mt-2 flex flex-col justify-center items-center md:justify-start lg:justify-start md:flex-row lg:flex-row">
      <HomeCard name="series" />
      <HomeCard name="movie" />
    </div>
  );
}
