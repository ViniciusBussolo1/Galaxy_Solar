import Image from 'next/image'

interface BenefitsCardProps {
  image: string
  alt: string
  title: string
  description: string
}

export default function BenefitsCard({
  image,
  alt,
  title,
  description,
}: BenefitsCardProps) {
  return (
    <div className="max-w-[15.625rem] space-y-[0.875rem]">
      <Image src={image} alt={alt} />
      <h3 className="text-2xl font-semibold leading-normal text-black">
        {title}
      </h3>
      <p className="text-lg leading-normal tracking-[0.023rem] text-black">
        {description}
      </p>
    </div>
  )
}
