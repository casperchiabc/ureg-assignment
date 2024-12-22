export default function RateItems({ data }) {
  return (
    <>
      {data instanceof Array && data.length == 1 ? (
        <div className="mt-12 mx-12">
          <span className="text-xl text-slate-700 italic">No Data.</span>
        </div>
      ) : (
        <div className="flex flex-wrap text-center">
          {data &&
            data.map((rate) => (
              <div key={rate.id} className="w-40 mx-10 my-6">
                <div className="font-semibold py-3 border border-gray-300 rounded-tl-md rounded-tr-md bg-gray-100">
                  {rate.code}
                </div>
                <div className="font-bold text-xl pt-2 pb-4 border border-t-0 border-gray-300 rounded-bl-md rounded-br-md bg-gray-50">
                  {/* if rate is null, meaning its the base_currency USD and rate will be 1.00 */}
                  {rate.rate?.toFixed(4) ?? "1.0000"}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}
