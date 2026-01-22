import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center hover:opacity-90 transition-opacity"
      aria-label="Aimy - Главная страница"
    >
      <div className="relative w-[80px] h-[93px] flex items-center justify-center">
        <Image
          src="/images/3b4ad5545599398306029ebdf33a9b5b082aff50.png"
          alt="Aimy Logo"
          width={80}
          height={93}
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </Link>
  );
}
