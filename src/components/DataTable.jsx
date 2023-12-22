const DataTable = ({ data, fields }) => {
  const dataArray = Array.from(Object.entries(data), ([key, value]) => ({
    key,
    ...value,
  }));
  dataArray.sort((a, b) => b.popularity - a.popularity);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Object.keys(fields).map((field, idx) => (
              <th key={idx} scope="col" className="px-6 py-3">
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataArray.map((row, idx) => (
            <tr
              key={idx}
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {Object.keys(fields).map((label, labelIdx) => (
                <td
                  key={labelIdx}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {label == "price" && <span>₹ </span>}
                  {row[label]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
