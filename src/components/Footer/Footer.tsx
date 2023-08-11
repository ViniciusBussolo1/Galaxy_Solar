import Image from 'next/image'

import Logo from '../../../public/Header_Logo.svg'

import User from '../../../public/Footer/User_Square.svg'
import Smartphone from '../../../public/Footer/Smartphone.svg'
import Email from '../../../public/Footer/Email.svg'

import Facebook from '../../../public/Footer/Facebook.svg'
import Youtube from '../../../public/Footer/Youtube.svg'
import Instagram from '../../../public/Footer/Instagram.svg'

export default function Footer() {
  return (
    <footer className="bg-black flex justify-center items-center pt-[3.625rem] pb-[3.125rem]">
      <div className="w-[68.25rem] space-y-4">
        {/* CONTACT TITLE */}
        <h1 className="text-5xl leading-normal font-bold text-white">
          Contato
        </h1>
        <p className="max-w-[52rem] text-lg tracking-[0.023rem] text-white70">
          Entre em contato conosco para mais informações sobre nossos serviços
          de energia solar ou para agendar uma consulta. Estamos ansiosos para
          ajudá-lo a explorar as opções de energia solar e encontrar a solução
          perfeita para suas necessidades. Não hesite em nos enviar uma mensagem
          ou ligar para nós para marcar uma consulta. Estamos sempre dispostos a
          responder a perguntas e ajudar de qualquer maneira que pudermos.
        </p>

        {/* CONTACT FORM */}
        <form className="w-full">
          {/* FORM INPUT USER SMARTPHONE */}
          <div className="flex gap-2 justify-between">
            <div className="space-y-3 max-w-[32.25rem] w-full">
              <label className="text-sm font-medium text-white">Nome</label>
              <div className=" flex gap-2 py-3 px-[0.875rem] rounded-lg bg-white shadow-input focus-within:outline focus-within:outline-[2px] focus-within:outline-blue">
                <Image src={User} alt="Image User" />
                <input
                  type="text"
                  placeholder="nome"
                  className="w-full outline-none placeholder:text-gray"
                />
              </div>
            </div>
            <div className="space-y-3 max-w-[32.25rem] w-full">
              <label className="text-sm font-medium text-white">Telefone</label>
              <div className=" flex gap-2 py-3 px-[0.875rem] rounded-lg bg-white shadow-input focus-within:outline focus-within:outline-[2px] focus-within:outline-blue">
                <Image src={Smartphone} alt="Image Smartphone" />
                <input
                  type="text"
                  placeholder="99999-9999"
                  className="w-full outline-none placeholder:text-gray"
                />
              </div>
            </div>
          </div>

          {/* FORM INPUT EMAIL */}
          <div className="space-y-3 w-full mt-3">
            <label className="text-sm font-medium text-white">Email</label>
            <div className=" flex gap-2 py-3 px-[0.875rem] rounded-lg bg-white shadow-input focus-within:outline focus-within:outline-[2px] focus-within:outline-blue">
              <Image src={Email} alt="Image Email" />
              <input
                type="text"
                placeholder="email@exemplo.com"
                className="w-full outline-none placeholder:text-gray"
              />
            </div>
          </div>

          {/* FORM INPUT MENSSAGE */}
          <div className="space-y-3 w-full mt-3">
            <label className="text-sm font-medium text-white">Mensagem</label>
            <textarea
              placeholder="O que você precisa?"
              className="w-full h-[8.375rem] py-[0.625rem] px-[0.875rem] rounded-lg bg-white shadow-input focus-within:outline focus-within:outline-[2px] focus-within:outline-blue placeholder:text-gray"
            ></textarea>
          </div>

          <button className="w-[28rem] text-lg leading-6 font-semibold text-white mt-3 py-4 px-8 bg-linear-gradient-button rounded-[0.313rem]">
            ENVIAR MENSAGEM
          </button>
        </form>

        {/* CONTACT INFOS */}
        <div className="pt-24 flex justify-between">
          <div className="space-y-2">
            <Image src={Logo} alt="Image Logo" />
            <div className="flex items-center gap-4">
              <Image src={Facebook} alt="Icon Facebook" />
              <Image src={Youtube} alt="Icon Youtube" />
              <Image src={Instagram} alt="Icon Instagram" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-[1.938rem] leading-normal font-semibold text-white">
              Empresa
            </h1>
            <span className="text-lg text-white70 font-medium leading-normal">
              Sobre
            </span>
            <span className="text-lg text-white70 font-medium leading-normal">
              Clientes
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-[1.938rem] leading-normal font-semibold text-white">
              Contatos
            </h1>
            <span className="text-lg text-white70 font-medium leading-normal">
              +55 99 9999-9999
            </span>
            <span className="text-lg text-white70 font-medium leading-normal">
              GalaxySolar@Galaxy.com
            </span>
            <span className="text-lg text-white70 font-medium leading-normal">
              Rua orbita do Sol, 03
            </span>
            <span className="text-lg text-white70 font-medium leading-normal">
              Via Láctea, Terra
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
