import { useState } from "react";

const itemsPerPage = 10;

const LocationTable = ({ data }) => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if ((page + 1) * itemsPerPage < data.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const startIndex = page * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>County</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>State</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Count</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.county}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.state}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {item.count}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={page === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + itemsPerPage >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LocationTable;
