export default function About() {
  return (
    <section className="flex justify-center pt-20 pb-[10.375rem] px-4">
      <div className="max-w-[70rem] w-full space-y-[4.375rem]">
        {/* ABOUT TITLE */}
        <h1 className="text-5xl leading-normal font-bold text-black">
          Nossos trabalhos.
        </h1>

        {/* ABOUT CARDS */}
        <div className="grid max-[744px]:grid-rows-3 min-[744px]:grid-cols-3 gap-4">
          <div className="max-[744px]:h-[13.688rem] min-[744px]:h-[30.188rem] max-[744px]:bg-residencial2 min-[744px]:bg-residencial bg-no-repeat bg-cover rounded-[0.313rem] flex justify-center items-center">
            <div className="bg-[#00000070] z-50 w-full h-full flex justify-center items-center rounded-[0.313rem]">
              <h1 className="text-[2.375rem] leading-normal font-bold text-white ">
                Residencial
              </h1>
            </div>
          </div>
          <div className="max-[744px]:h-[13.688rem] min-[744px]:h-[30.188rem] max-[744px]:bg-rural2 min-[744px]:bg-rural rounded-[0.313rem] bg-no-repeat bg-cover flex justify-center items-center ">
            <div className="bg-[#00000070] z-50 w-full h-full flex justify-center items-center rounded-[0.313rem]">
              <h1 className="text-[2.375rem] leading-normal font-bold text-white ">
                Rural
              </h1>
            </div>
          </div>
          <div className="max-[744px]:h-[13.688rem] min-[744px]:h-[30.188rem] max-[744px]:bg-comercial2 min-[744px]:bg-comercial bg-no-repeat bg-cover rounded-[0.313rem] flex justify-center items-center">
            <div className="bg-[#00000070] z-50 w-full h-full flex justify-center items-center rounded-[0.313rem]">
              <h1 className="text-[2.375rem] leading-normal font-bold text-white ">
                Comercial
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
