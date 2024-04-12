import Image from "next/image";

export default function Item() {
  return (
    <section className="flex flex-col justify-around h-[254px] w-full bg-[#FBFBFB] rounded-[60px] flex justify-center items-center border-2 border-[#949494">
      <div>
        <Image src="https://s3-alpha-sig.figma.com/img/b049/f29a/1dc6073ed8422b28ba5c657cc5c0081c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fNho8FiGDO7Fc1aHuHhbWlob4bmTdUTKXGncXur-CHxcCiP-Lacs~0xU5eeipoE7tD5jg8UgUXoNwawyUFT6JD0Z7q92TcSLptP126f7I7rMGL8~4vRcbrDxaFUNnmCDIraXX1dwLy5xDDQ~jGsl20TonfI-xplWBFDiRx6FXguV7rPIi65AsZT~HqqiWiq4CzvVcSwRg-9gvTcrXYveFPXiUarNs80f5b1j3zmjls3Zzb1ms8DDajsPfx-MV4wC-eem3kd9ph5OHpdKe9-iyy36r783fp1drmGWt9Af9z8xY50ziHUilelCCZxI4IWTTXycC0qUCjhokJJJbqcT0Q__" alt="Imagem" className="max-w-full max-h-full rounded-lg" width={140} height={120}> 
        </Image>
      </div>
      <div className="flex flex-col items-center">
        <span>Fresh Spinach</span>
        <span className="text-custom-secondary-500">$ 9.00</span>
      </div>
    </section>
  )
}