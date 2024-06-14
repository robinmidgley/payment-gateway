export default function Hero() {
  return (
    <div className="flex flex-col text-center pt-24 pb-16 px-3 gap-y-6">
      <div>
        <span className="border rounded-full py-1 px-3 text-sm bg-gray-400/5">
          New regions added
        </span>
      </div>
      <div className="flex flex-col gap-y-3 md:text-6xl text-5xl font-semibold">
        <div>Easy, Fast and</div>
        <div>Secure Payments</div>
      </div>
      <div className="text-black/60">
        Increase your business' revenue by accepting payments from around the
        globe.
      </div>
      <div>
        <button className="border border-blue-600 bg-gradient-to-b from-blue-600 to-blue-600/90 text-white px-4 py-2 rounded-md ease-in-out duration-200 hover:bg-blue-600">
          Create an account
        </button>
      </div>
    </div>
  );
}
