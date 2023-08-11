import Image from 'next/image'

import LeafyGreen from '../../../public/Benefits/Leafy_Green.svg'
import Clock from '../../../public/Benefits/Clock.svg'
import Landmark from '../../../public/Benefits/Landmark.svg'
import BarChartBig from '../../../public/Benefits/Bar_Chart_Big.svg'
import BenefitsCard from './BenefitsCard'

export default function Benefits() {
  return (
    <section className="py-40 flex justify-center items-center">
      <div className="flex max-[940px]:flex-col max-[940px]:max-w-[47.188rem] max-[940px]:w-full max-[940px]:items-start justify-center items-center gap-24 px-2 ">
        {/* BENEFITS */}
        <div className="max-[940px]:max-w-[47.188rem] max-[940px]:w-full max-w-[28.125rem] space-y-6">
          <h1 className="max-w-[26.313rem] text-5xl leading-[4.216rem] font-bold text-black">
            Sobre Nós e Benefícios.
          </h1>
          <div className="space-y-3 max-[940px]:w-full">
            <p className="text-lg leading-normal tracking-[0.023rem] text-black">
              Nossa empresa especializada em soluções de energia solar para
              propriedades residenciais, comerciais e rurais. Oferecemos uma
              gama de serviços, incluindo projeto e instalação de sistemas de
              painéis solares, bem como manutenção e suporte continuados.
            </p>
            <p className="text-lg leading-normal tracking-[0.023rem] text-black">
              Nossa equipe de profissionais experientes tem um profundo
              conhecimento de tecnologia solar e está comprometida em oferecer
              aos nossos clientes o mais alto nível de serviço.
            </p>
            <p className="text-lg leading-normal tracking-[0.023rem] text-black">
              Acreditamos que a energia solar é o futuro da energia e estamos
              dedicados a ajudar nossos clientes a fazer a transição para uma
              fonte de energia mais sustentável e eficiente em termos de custos.
            </p>
          </div>
        </div>

        {/* BENEFITS CARDS */}
        <div className="max-[940px]:w-full w-[36rem] grid grid-cols-2 grid-rows-2 gap-6 max-[940px]:place-content-between">
          <BenefitsCard
            image={LeafyGreen}
            alt="Image Leafy Green"
            title="Energia limpa"
            description="Energia limpa é produzida de fontes renováveis e não causa danos
              significativos ao meio ambiente, sendo uma importante forma de
              reduzir as emissões de gases de efeito estufa e contribuir para um
              futuro sustentável."
          />
          <BenefitsCard
            image={Clock}
            alt="Image Clock"
            title="Alta Durabilidade"
            description="Os sistemas de energia solar possuem alta durabilidade, 
            podendo durar mais de 25 anos. Isso se deve ao fato de que as placas solares 
            são construídas com materiais de alta qualidade e são resistentes às intempéries."
          />
          <BenefitsCard
            image={Landmark}
            alt="Image Landmark"
            title="Economia"
            description="Um dos principais benefícios da energia solar é a economia na conta de energia elétrica. 
            Ao produzir a sua própria energia, você pode reduzir em até 95% o valor da conta de luz."
          />
          <BenefitsCard
            image={BarChartBig}
            alt="Image Bar Chart Big"
            title="Valoriza o imóvel"
            description="A instalação de um sistema de energia solar pode valorizar significativamente o valor do seu imóvel. 
            Os compradores estão cada vez mais interessados em imóveis que possuem tecnologias sustentáveis."
          />
        </div>
      </div>
    </section>
  )
}
