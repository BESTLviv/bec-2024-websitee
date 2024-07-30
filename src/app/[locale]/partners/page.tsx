import Partners from "@/components/partners/Partners";
import lines from "/public/linesPartners.svg";
import linesMobile from "/public/linesPartnersMobile.svg";
import Image from "next/image";
const PartnersPage: React.FC = () => {

  return (
    <div className=' relative  w-full overflow-hidden bg-side text-white'>
      <Image className=" absolute max-[1023px]:opacity-0 lg:right-[-19%] lg:bottom-[1%] min-[1540px]:right-[-25%] min-[1540px]:bottom-[1%] h-full w-full" src={lines} alt="background"/>
      <Image className=" absolute min-[1023px]:opacity-0 max-[619px]:right-[-5%] max-[619px]:bottom-[8%] max-[1023px]:right-[-15%] max-[1023px]:bottom-[2%] h-full w-full" src={linesMobile} alt="background"/>
      <Partners/>
    </div>
       
  );
};

export default PartnersPage;