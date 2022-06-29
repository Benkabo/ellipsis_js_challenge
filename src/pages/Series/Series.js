
import Card from "../../components/Card";

import placeholder from "../../assets/placeholder.png";

import { useLocation } from "react-router-dom";

import filteredList from "../../components/FilteredData";

export default function Series() {
  const { pathname } = useLocation();

  const renderData = filteredList.map((values, index) => {
    if (values.programType === pathname.slice(1)) {
      const imageDetails = values.images["Poster Art"];
      return (
        <Card
          key={index}
          posterImage={imageDetails.url ? imageDetails.url : placeholder}
          width={imageDetails.width}
          height={imageDetails.height}
          title={values.title}
          year={values.releaseYear}
          description={truncate(values.description)}
        />
      );
    } else {
      return null;
    }
  });

  function truncate(str) {
    return str.length > 10 ? str.substring(0, 60) + "..." : str;
  }

  return (
    <div className="container mx-auto my-3">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-2 auto-rows-auto">
        {renderData}
      </div>
    </div>
  );
}
