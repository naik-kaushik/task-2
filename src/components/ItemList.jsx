const ItemList = ({ list, setList }) => {
  return (
    <div>
      {Object.keys(list).map((item) => (
        <div
          key={item}
          className="flex  items-center my-2 ps-4 border border-gray-200 rounded dark:border-gray-700"
        >
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            id={item}
            checked={list[item]}
            onChange={() => setList({ ...list, [item]: !list[item] })}
          />
          <label
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor={item}
          >
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
