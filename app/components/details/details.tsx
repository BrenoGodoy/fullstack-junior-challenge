import Image from "next/image";

export default function Details({imageUrl, description, title}: any) {
  return (
    <div className="w-[256px] h-[256px] rounded-xl flex flex-col items-start">
      <div className="relative w-full h-128 rounded-t-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt="details-image"
          width={80}
          height={80}
        />
      </div>
      <div className="mt-10">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}