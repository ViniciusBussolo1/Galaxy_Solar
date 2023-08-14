'use client'

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper/modules'

import Image from 'next/image'

import Cliente1 from '../../../public/Customers/Slide/cliente_1.svg'
import Cliente2 from '../../../public/Customers/Slide/cliente_2.svg'
import Cliente3 from '../../../public/Customers/Slide/cliente_3.svg'

import ArrowLeftCircle from '../../../public/Customers/Arrow_Left_Circle.svg'
import ArrowRightCircle from '../../../public/Customers/Arrow_Right_Circle.svg'
import ItemsSlide from './CustomersItemsSlide'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Customers() {
  SwiperCore.use([Navigation])

  return (
    <section className="bg-black flex justify-center items-center pt-16 pb-36 px-4">
      <div className="max-w-[70rem] w-full">
        {/* CUSTOMERS TITLE */}
        <div className="w-full flex items-center justify-between">
          <h1 className="max-[525px]:text-4xl text-5xl font-bold leading-normal text-white">
            Nossos Clientes
          </h1>
          <div className="flex gap-5">
            <Image
              src={ArrowLeftCircle}
              alt="Image Arrow Left Circle"
              className="cursor-pointer custom-swiper-button-prev"
            />
            <Image
              src={ArrowRightCircle}
              alt="Image Arrow Right Circle"
              className="cursor-pointer custom-swiper-button-next"
            />
          </div>
        </div>
        {/* CUSTOMERS SLIDER */}
        <Swiper
          navigation={{
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
          }}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            744: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mt-36"
        >
          <SwiperSlide>
            <ItemsSlide
              image={Cliente1}
              alt="Image Client 1"
              title="P.Oliveira"
              description="Estou extremamente satisfeito com o sistema fotovoltaico que
              adquiri da sua empresa. Desde que instalamos os painéis solares em
              nosso supermercado, notamos uma redução significativa em nossas
              contas de energia."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemsSlide
              image={Cliente2}
              alt="Image Client 2"
              title="O.Silva"
              description="A decisão de instalar um sistema fotovoltaico em minha casa foi a melhor escolha que já fiz. 
            Agora, posso aproveitar a energia solar para alimentar meus aparelhos domésticos e iluminar todos os cômodos"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemsSlide
              image={Cliente3}
              alt="Image Client 3"
              title="L.Rodrigues"
              description="O sistema fotovoltaico instalado em nossa fábrica superou todas as nossas expectativas. 
            Agora, temos uma fonte confiável de energia limpa que nos ajuda a reduzir nossos custos operacionais significativamente."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemsSlide
              image={Cliente1}
              alt="Image Client 1"
              title="P.Oliveira"
              description="Estou extremamente satisfeito com o sistema fotovoltaico que
              adquiri da sua empresa. Desde que instalamos os painéis solares em
              nosso supermercado, notamos uma redução significativa em nossas
              contas de energia."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemsSlide
              image={Cliente2}
              alt="Image Client 2"
              title="O.Silva"
              description="A decisão de instalar um sistema fotovoltaico em minha casa foi a melhor escolha que já fiz. 
            Agora, posso aproveitar a energia solar para alimentar meus aparelhos domésticos e iluminar todos os cômodos"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemsSlide
              image={Cliente3}
              alt="Image Client 3"
              title="L.Rodrigues"
              description="O sistema fotovoltaico instalado em nossa fábrica superou todas as nossas expectativas. 
            Agora, temos uma fonte confiável de energia limpa que nos ajuda a reduzir nossos custos operacionais significativamente."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
