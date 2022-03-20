const Cta = () => {
  return (
    <div className="flex justify-between items-center p-8 m-16 rounded-2xl bg-gradient-bar">
      <div className="flex flex-col text-left text-white">
        <p className="text-xs leading-7 font-medium">
          Request Early Access to Get Started
        </p>
        <h3 className="text-2xl leading-[45px] font-extrabold">
          Register Today & start exploring the endless possibilities.
        </h3>
      </div>
      <div className="flex justify-center items-center ml-8">
        <button
          type="button"
          className="bg-black text-white font-bold text-lg leading-7 px-4 py-2 rounded-[2rem] cursor-pointer min-w-[150px]"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Cta
