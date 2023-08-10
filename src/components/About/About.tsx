export default function About() {
  return (
    <section className="flex justify-center pt-20 pb-[10.375rem]">
      <div className="max-w-[70rem] w-full space-y-[4.375rem]">
        {/* ABOUT TITLE */}
        <h1 className="text-5xl leading-normal font-bold text-black">
          Nossos trabalhos.
        </h1>

        {/* ABOUT CARDS */}
        <div className="flex justify-between">
          <div className="h-[30.188rem] w-[22rem] bg-residencial rounded-[0.313rem] flex justify-center items-center">
            <div className="bg-[#00000070] z-50 w-full h-full flex justify-center items-center rounded-[0.313rem]">
              <h1 className="text-[2.375rem] leading-normal font-bold text-white ">
                Residencial
              </h1>
            </div>
          </div>
          <div className="h-[30.188rem] w-[22rem] bg-comercial rounded-[0.313rem] flex justify-center items-center">
            <div className="bg-[#00000070] z-50 w-full h-full flex justify-center items-center rounded-[0.313rem]">
              <h1 className="text-[2.375rem] leading-normal font-bold text-white ">
                Comercial
              </h1>
            </div>
          </div>
          <div className="h-[30.188rem] w-[22rem] bg-rural rounded-[0.313rem] flex justify-center items-center ">
            <div className="bg-[#00000070] z-50 w-full h-full flex justify-center items-center rounded-[0.313rem]">
              <h1 className="text-[2.375rem] leading-normal font-bold text-white ">
                Rural
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
