import Image from 'next/image'

interface ItemsSlidesProps {
  image: string
  alt: string
  title: string
  description: string
}

export default function ItemsSlide({
  image,
  alt,
  title,
  description,
}: ItemsSlidesProps) {
  return (
    <div className="max-w-[22rem] w-full space-y-[0.875rem]">
      <Image src={image} alt={alt} />
      <h3 className="text-[1.75rem] leading-normal font-bold text-white">
        {title}
      </h3>
      <p className="text-lg leading-normal tracking-[0.023rem] text-white70">
        {description}
      </p>
    </div>
  )
}
