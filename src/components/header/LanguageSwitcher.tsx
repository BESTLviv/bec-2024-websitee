import Link from "next/link";
import { usePathname } from "next/navigation";

// 
const LanguageSwitcher = () => {
  const path = usePathname();
  
const getLocalizedPath = (locale: string) => {
  const segments = path.split('/');
  
  // Якщо перший сегмент - "ua" або "en", замінюємо його
  if (segments[1] === 'ua' || segments[1] === 'en') {
    segments[1] = locale;
  } else {
    // Інакше додаємо новий сегмент мови
    segments.splice(1, 0, locale);
  }
  
  return segments.join('/');
};
  return (
    <div className=' font-rubik switcher relative z-0 text-white flex flex-shrink-0 mr-5 '>
      <Link
        className={`flex-1 flex justify-center items-center transition duration-700 ease-in-out ${path.startsWith("/ua") ? 'bg-propositionBorder text-black' : ''}`}
        href={getLocalizedPath('ua')}
      >
        UA
      </Link>
      <Link
        className={`flex-1 flex justify-center items-center transition duration-700 ease-in-out ${path.startsWith("/en") ? 'bg-propositionBorder text-black' : ''}`}
        href={getLocalizedPath('en')}
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
