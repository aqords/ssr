import Link from "next/link";
import Image from "next/image";
import bull from "/public/assets/images/aboutbull.svg";

export default function Error() {
  return (
    <div className="relative flex justify-center items-center h-[90vh] overflow-hidden">
      <Link className="text-[30px]" href="/">
        This page doesn't found ,{" "}
        <span className="font-[500] bg-clip-text text-transparent bg-gradient-to-tl from-[#C6B38A] from-0% via-[#F3C691] via-46% to-[#B4703E] to-100% border-b-[1px] gradient-brown-yellow ">
          click
        </span>
        <span> </span>
        to redirect AQORDS - Homepage
      </Link>
      <Image
        className="absolute top-0 right-[-37%] sm:right-[-20%]"
        src={bull}
        alt="logo"
      />
    </div>
  );
}
