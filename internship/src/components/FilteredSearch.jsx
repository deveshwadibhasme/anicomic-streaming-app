import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const FilteredSearch = ({ setData }) => {
  const [dropDownData, setDropDownData] = useState();
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/alphazahmad/intern-data/refs/heads/main/intern-data/batches.json"
        );
        const data = response.data[0];
        setFetchedData(data);
        setDropDownData(Object.keys(data));
      } catch (error) {
        console.error("Error fetching data:", error);
        setDropDownData([]); 
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (value) => {
    if (fetchedData && fetchedData[value]) {
      setData(fetchedData[value]);
    } else {
      setData(null); 
    }
  };

  return (
    <section className="max-w-6xl min-h-50 h-full mx-auto">
      <div className="max-w-xl rounded-2xl p-3 border-white border mx-auto text-center py-4 text-xl">
        Basic to Advanced Graphic Design{" "}
        <FaAngleDown className="inline-block ml-4" />
      </div>
      <select
        className="max-w-lg w-full mt-4 rounded-2xl p-3 border-white border mx-auto text-center py-4 text-xl marker:hidden block relative"
        onChange={(e) => handleSubmit(e.target.value)}
        defaultValue="" 
      >
        <option
          value=""
          className="w-full px-4 bg-black text-white rounded-2xl p-2 absolute top-10"
          disabled
        >
          Select Batches
        </option>
        {dropDownData?.map((batchKey) => (
          // batchKey.map((batch)=>(
          <option
            key={batchKey}
            value={batchKey}
            className="w-full px-4 bg-black text-white rounded-2xl p-2 absolute top-10"
          >
            BTAGD {batchKey}
          </option>
          // ))
        ))}
      </select>
    </section>
  );
};

export default FilteredSearch;
