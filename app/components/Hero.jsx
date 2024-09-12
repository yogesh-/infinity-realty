export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover md:object-fill"
        autoPlay
        muted
        playsInline
        loop
        src="https://a1.estate/wp-content/uploads/2023/05/mobile.mp4"
        type="video/mp4"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          BUY A PROPERTY FROM $200,000 <br /> AND OBTAIN AN INVESTOR VISA
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="bg-blue-900 text-white py-2 px-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">
            5%<br />Property<br />Down Payment
          </div>
          <div className="bg-blue-900 text-white py-2 px-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">
            0%<br />Commission
          </div>
          <div className="bg-blue-900 text-white py-2 px-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">
            0%<br />Interest Rate
          </div>
          <div className="bg-blue-900 text-white py-2 px-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">
            0%<br />Property Tax
          </div>
          <div className="bg-blue-900 text-white py-2 px-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg">
            Pay with<br />Cryptocurrency
          </div>
        </div>
        
        <button className="border-2 border-orange-500 text-orange-500 py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-sm sm:text-lg font-semibold hover:scale-75 transition duration-300">
          REGISTER YOUR INTEREST NOW
        </button>
      </div>
    </div>
  );
}
