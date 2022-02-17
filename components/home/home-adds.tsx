import { ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Image from 'next/image';
import playstore from '../../public/playstore-logo.svg';

export function HomeAdds() {
  return (
    <div className="rounded-sm">
      <div className="flex flex-row relative py-2 px-2 border-gray-100 border-2 rounded-lg justify-between">
        <div className="flex flex-row items-center">
          <div
            aria-hidden
            className="flex flex-none items-center justify-center w-12 h-12 bg-blue-50 rounded-full"
          >
            <Image src={playstore} alt="playstore" className="w-6 h-6" />
          </div>
          <div className="ml-4 space-y-1">
            <h3 className="text-base leading-5 font-semibold">
              <Link href="https://play.google.com/store/apps/details?id=com.muamalah.daily&hl=en">
                <a className="helper-link-cover">Muamalah Daily</a>
              </Link>
            </h3>
            <p className="text-xs leading-4 text-gray-500">
              Download app fiqh muamalah yg dikelola oleh Ustadz DR. Oni
              Sahroni, MA.
            </p>
          </div>
        </div>
        <div
          aria-hidden
          className="flex flex-none items-center justify-center ml-2"
        >
          <ChevronRightIcon className="w-6 h-6 text-brand-500" />
        </div>
      </div>
    </div>
  );
}
