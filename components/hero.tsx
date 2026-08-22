export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-row m-4">
      {/* Info */}
      <div className="flex justify-center items-center w-1/2">
        <div className="w-64">
          <h1 className="font-bold text-5xl">Hero</h1>
          <p className="">More info on more info. Get your feedback.</p>
        </div>
      </div>

      {/* image */}
      <div className="flex w-1/2 bg-blue-900"></div>
    </div>
  );
}
