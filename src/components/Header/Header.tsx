'use client'

import Image from 'next/image'
import CountUp from 'react-countup'

import Logo from '../../../public/Header_Logo.svg'
import ImageHeader from '../../../public/Header/Image_Header.svg'
import Menu from '../../../public/Header/Menu.svg'

export default function Header() {
  return (
    <header className="w-full h-[38.188rem] max-[744px]:h-[55rem] bg-black flex justify-center gap-14 pt-8 px-4">
      <div className="w-[70rem] h-full space-y-14 relative">
        {/* HEADER */}
        <div className="w-full h-[3.5rem] flex justify-between items-center">
          <Image src={Logo} alt="Logo GalaxySolar" />
          <div className="flex items-center gap-10 max-[549px]:hidden">
            <nav>
              <ul className="flex gap-10">
                <li className="text-white text-base cursor-pointer hover:text-white70">
                  Início
                </li>
                <li className="text-white text-base cursor-pointer hover:text-white70">
                  Clientes
                </li>
                <li className="text-white text-base cursor-pointer hover:text-white70">
                  Sobre
                </li>
              </ul>
            </nav>
            <button className="text-white text-lg font-medium px-[1.313rem] py-[0.625rem] border border-blue rounded-[0.313rem]">
              Contate-nos
            </button>
          </div>
          <Image
            src={Menu}
            alt="Menu Image"
            className="max-[549px]:block hidden"
          />
        </div>

        {/* HERO */}
        <div className="grid max-[744px]:grid-rows-tablet max-[744px]:gap-5 min-[745px]:grid-cols-2 min-[745px]:gap-10">
          <div className="space-y-2">
            <h1 className="max-w-[30.438rem] text-[2.5rem] leading-[2.75rem] font-medium text-white">
              Energia limpa e renovavel Para um mundo melhor.
            </h1>
            <p className="max-w-[33.563rem] text-base leading-[1.7rem] tracking-[0.005rem] text-white70">
              Aqui, exploramos as soluções que impulsionam um mundo melhor e
              mais sustentável. Acreditamos no poder da energia limpa para
              transformar a maneira como vivemos, preservando os recursos
              naturais e reduzindo nossa pegada ambiental.
            </p>
          </div>
          <Image src={ImageHeader} alt="Image Header" className="" />
        </div>

        {/* STATISTICS */}
        <div className="w-full flex justify-center absolute max-[744px]:top-[740px] min-[745px]:top-[470px]">
          <div className="w-[49.188rem] h-[6.375rem] bg-white rounded-lg shadow-statistics flex max-[599px]:justify-center max-[599px]:gap-10 justify-between items-center gap-2 px-4">
            <div className="max-w-[10.563rem] flex flex-col gap-1 max-[599px]:hidden">
              <span className="text-[1.75rem] font-bold text-blue">
                {' '}
                +<CountUp start={0} end={1200} />
              </span>
              <span className="text-lg font-semibold text-black">
                Baterias Instalados
              </span>
            </div>
            <div className="max-w-[4.625rem] flex flex-col gap-1 max-[599px]:flex max-[743px]:hidden">
              <span className="text-[1.75rem] font-bold text-blue">
                +<CountUp start={0} end={532} />
              </span>
              <span className="text-lg font-semibold text-black">Clientes</span>
            </div>
            <div className="max-w-[12.25rem] flex flex-col gap-1 max-[599px]:hidden">
              <span className="text-[1.75rem] font-bold text-blue">
                R$ 46,331
              </span>
              <span className="text-lg font-semibold text-black">
                Dinheiro Economizado
              </span>
            </div>
            <div className="max-w-[9.875rem] flex flex-col gap-1">
              <span className="text-[1.75rem] font-bold text-blue">
                +<CountUp start={0} end={840} />
              </span>
              <span className="text-lg font-semibold text-black">
                Painéis Instalados
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
