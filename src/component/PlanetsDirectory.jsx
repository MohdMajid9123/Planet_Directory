import React, { useState, useEffect } from "react";
import ResidentList from "./ResidentList";
const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(
          "https://swapi.dev/api/planets/?format=json"
        );
        const data = await response?.json();
        setPlanets(data?.results);
        setNextPage(data?.next);
        console.log(data?.next);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    fetchPlanets();
  }, []);

  const fetchNextPage = async () => {
    try {
      if (nextPage) {
        const response = await fetch(nextPage);
        const data = await response?.json();
        setPlanets([...planets, ...data?.results]);
        setNextPage(data?.next);
      }
    } catch (error) {
      console.error("Error fetching next page:", error);
    }
  };

  return (
    <div className="planets-directory">
      <h1>Planets Directory</h1>
      <div className="planet-cards">
        {planets.map((planet, index) => (
          <div className="planet-card" key={index}>
            <h2>{planet?.name}</h2>
            <p>Climate: {planet?.climate}</p>
            <p>Population: {planet?.population}</p>
            <p>Terrain: {planet?.terrain}</p>
            <ResidentList residentsUrls={planet?.residents} />
          </div>
        ))}
      </div>
      {nextPage && (
        <button className="load-more" onClick={fetchNextPage}>
          Load More
        </button>
      )}
    </div>
  );
};

export default PlanetsDirectory;
