import React, { useState, useEffect } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ residentsUrls }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await fetch(residentsUrls[0]); // Fetch details for the first resident
        const data = await response.json();
        setResident(data);
      } catch (error) {
        console.error("Error fetching resident:", error);
      }
    };

    fetchResident();
  }, [residentsUrls]);

  return (
    <div className="resident-list">
      {resident && (
        <ResidentCard
          name={resident.name}
          height={resident.height}
          mass={resident.mass}
          gender={resident.gender}
        />
      )}
    </div>
  );
};

export default ResidentList;
