import Image from 'next/image'

import Cliente1 from '../../../public/Customers/Slide/cliente_1.svg'
import Cliente2 from '../../../public/Customers/Slide/cliente_2.svg'
import Cliente3 from '../../../public/Customers/Slide/cliente_3.svg'

import ArrowLeftCircle from '../../../public/Customers/Arrow_Left_Circle.svg'
import ArrowRightCircle from '../../../public/Customers/Arrow_Right_Circle.svg'
import ItemsSlide from './CustomersItemsSlide'

export default function Customers() {
  return (
    <section className="bg-black flex justify-center items-center pt-16 pb-36">
      <div className="max-w-[70rem] w-full">
        {/* CUSTOMERS TITLE */}
        <div className="w-full flex justify-between">
          <h1 className="text-5xl font-bold leading-normal text-white">
            Nossos Clientes
          </h1>
          <div className="flex gap-5">
            <Image
              src={ArrowLeftCircle}
              alt="Image Arrow Left Circle"
              className="cursor-pointer"
            />
            <Image
              src={ArrowRightCircle}
              alt="Image Arrow Right Circle"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* CUSTOMERS SLIDER */}
        <div className="mt-36 flex gap-8">
          <ItemsSlide
            image={Cliente1}
            alt="Image Client 1"
            title="P.Oliveira"
            description="Estou extremamente satisfeito com o sistema fotovoltaico que
              adquiri da sua empresa. Desde que instalamos os painéis solares em
              nosso supermercado, notamos uma redução significativa em nossas
              contas de energia."
          />
          <ItemsSlide
            image={Cliente2}
            alt="Image Client 2"
            title="O.Silva"
            description="A decisão de instalar um sistema fotovoltaico em minha casa foi a melhor escolha que já fiz. 
            Agora, posso aproveitar a energia solar para alimentar meus aparelhos domésticos e iluminar todos os cômodos"
          />
          <ItemsSlide
            image={Cliente3}
            alt="Image Client 3"
            title="L.Rodrigues"
            description="O sistema fotovoltaico instalado em nossa fábrica superou todas as nossas expectativas. 
            Agora, temos uma fonte confiável de energia limpa que nos ajuda a reduzir nossos custos operacionais significativamente."
          />
        </div>
      </div>
    </section>
  )
}
