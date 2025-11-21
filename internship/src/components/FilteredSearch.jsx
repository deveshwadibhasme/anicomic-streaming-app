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
    <section className="max-w-6xl min-h-50 mt-4 h-full mx-auto">
      <select className="max-w-lg rounded-2xl hover:rounded-none transition-all px-4 border-white border mx-auto text-center py-2 text-lg block">
        <option value="">
          Basic to Advanced Graphic Design{" "}
          {/* <FaAngleDown className="inline-block ml-4" /> */}
        </option>
      </select>
      <select
        className="max-w-sm mt-4 px-3 rounded-2xl hover:rounded-none transition-all border-white border mx-auto text-center py-1 text-lg marker:hidden block relative"
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
