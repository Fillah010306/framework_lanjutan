export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">

      <table className="w-full text-left text-sm">

        {/* HEADER */}
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">

          <tr>

            {headers.map((header, index) => (
              <th
                key={index}
                className="py-3 px-4 font-semibold"
              >
                {header}
              </th>
            ))}

          </tr>

        </thead>

        {/* BODY */}
        <tbody className="divide-y divide-gray-100 bg-white">

          {children}

        </tbody>

      </table>

    </div>
  );
}