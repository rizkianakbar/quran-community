import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import Kian from '../../../public/kian.jpeg';
import { Button } from '../button/button';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs() {
  const [categories] = useState({
    Sedang_Menghafal: [
      {
        id: 1,
        name: 'Rizkian Akbar Juniansyah',
        date: '5h ago',
        ayat: 'Al Baqarah : 21-30',
        age: 20,
        photo: Kian,
      },
      {
        id: 2,
        name: 'Sinta Agustina',
        date: '2h ago',
        ayat: 'Al Baqarah : 21-30',
        age: 22,
        photo: Kian,
      },
    ],
    Sudah_Hafal: [
      {
        id: 1,
        name: 'Fauzi Viera',
        date: 'Jan 7',
        ayat: 'Al Baqarah : 21-30',
        age: 20,
        photo: Kian,
      },
      {
        id: 2,
        name: 'Salman Alfarisi',
        date: 'Mar 19',
        ayat: 'Al Baqarah : 21-30',
        age: 12,
        photo: Kian,
      },
    ],
    Butuh_Koreksi: [
      {
        id: 1,
        name: 'Aditya Ahmad',
        date: '2d ago',
        ayat: 'Al Baqarah : 21-30',
        age: 22,
        photo: Kian,
      },
      {
        id: 2,
        name: "Rizki's",
        date: '4d ago',
        ayat: 'Al Baqarah : 21-30',
        age: 19,
        photo: Kian,
      },
    ],
  });

  return (
    <div className="w-full px-2 py-11 px-4 mx-auto">
      {/* make it center */}
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-gray-200 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
                  'focus:outline-none focus:ring-1 ring-offset-4 ring-offset-quranmemo-secondary ring-white ring-opacity-10',
                  selected
                    ? 'bg-white shadow text-quranmemo-primary'
                    : 'text-black hover:bg-white/[0.12] hover:text-quranmemo-primary'
                )
              }
            >
              {category.replace(/_/g, ' ')}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-2',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul className="divide-y-2 divide-quranmemo-secondary divide-dashed">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="hover:bg-coolGray-100 first:pt-0 pt-4 pb-4"
                  >
                    {/* make a photo in left position and the text in right position and the date is in the right corner of the screen*/}
                    <div className="flex flex-col ">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <div className="border-2 border-quranmemo-primary rounded-full w-[60px] h-[60px]">
                            <Image
                              src={post.photo}
                              alt={post.name}
                              width={70}
                              height={70}
                              className="rounded-full object-cover object-top"
                            />
                          </div>
                          <div className="flex-1 ml-2">
                            <div className="flex items-center">
                              <div className="flex-1 ml-2">
                                <div className="text-sm leading-5 font-medium text-coolGray-900">
                                  {post.name}
                                </div>
                                <div className="text-xs leading-5 text-coolGray-600">
                                  {post.ayat}
                                </div>
                                <Button
                                  className="text-xs"
                                  onClick={() => console.log('clicked')}
                                  primary
                                >
                                  Koreksi
                                </Button>
                              </div>
                              <div className="ml-2 mb-12">
                                <div className="text-xs leading-5 text-coolGray-600">
                                  {post.date}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
