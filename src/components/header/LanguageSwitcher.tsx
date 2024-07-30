import Link from "next/link";
import { usePathname } from "next/navigation";
// 
const LanguageSwitcher = () => {
  const path = usePathname();
  return (
    <div className=' font-rubik switcher relative z-0 text-white flex flex-shrink-0 mr-5 '>
      <Link
        className={`flex-1 flex justify-center items-center transition duration-700 ease-in-out ${path.startsWith("/ua") ? 'bg-propositionBorder text-black' : ''}`}
        href="/ua"
      >
        UA
      </Link>
      <Link
        className={`flex-1 flex justify-center items-center transition duration-700 ease-in-out ${path.startsWith("/en") ? 'bg-propositionBorder text-black' : ''}`}
        href="/en"
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
