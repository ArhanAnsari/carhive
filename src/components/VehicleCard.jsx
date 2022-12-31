export default function VehicleCard({ vehicle }) {
  const { details, brand, model, year } = vehicle;

  return (
    <div className="flex flex-col items-start gap-y-5 border border-slate-900 p-8 rounded-2xl">
      <span className="h-52 w-full border border-neutral-900 rounded-xl"></span>
      <div className="w-full">
        <div className="w-full flex flex-row items-center justify-between mb-9">
          <div>
            <p className="big font-bold">{brand}</p>
            <p>
              {model} {year}
            </p>
          </div>
          <div>
            <p>${details.price}</p>
            <p className="font-light">/ day</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <button>See details</button>
          <button>Rent now</button>
        </div>
      </div>
    </div>
  );
}
