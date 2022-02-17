import Image from 'next/image';
import { Container } from '../layout/container';
import banner from '../../public/banner.png';

export function HomeHeader() {
  return (
    <header>
      <Container>
        <div className="relative">
          <div aria-hidden className="select-none">
            <Image
              src={banner}
              placeholder="blur"
              alt="banner"
              layout="responsive"
            />
          </div>
          <div className="flex flex-col absolute top-0 mb-5 left-0 w-full h-full p-4">
            <div className="flex flex-col flex-1 items-start justify-between">
              {/* TODO: add logo */}
              <h2 className="h-8 md:h-10 font-bold">QuranMemo</h2>
              <div className="w-[60%] sm:w-[55%] space-y-1">
                <h1 className="text-brand-500 text-lg sm:text-2xl">
                  <span className="font-semibold">QuranMemo</span> Community
                </h1>
                <p className="text-xs sm:text-sm">
                  Menghafal Al-Quran di era digital
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
