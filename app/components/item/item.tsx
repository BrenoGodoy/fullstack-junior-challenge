import Image from "next/image";

export default function Item({title, price, imageUrl}: any) {
  return (
    <section className="flex flex-col justify-around h-[254px] w-full bg-custom-primary-50 bg-opacity-50 rounded-[60px] flex justify-center items-center border-2 border-[#949494">
      <div>
        <Image src={imageUrl} alt="item-image" width={140} height={120}> 
        </Image>
      </div>
      <div className="flex flex-col items-center">
        <span>{title}</span>
        <span className="text-custom-secondary-500">$ {price}</span>
      </div>
    </section>
  )
}