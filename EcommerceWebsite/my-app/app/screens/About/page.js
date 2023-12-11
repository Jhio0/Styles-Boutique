import React from 'react';
import { journalData } from '@/app/components/journalComponent';
import { Box } from '@/app/components/header';
import Image from 'next/image';
const JournalPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Box/>
      <header className="bg-cover bg-center h-96 text-white flex items-center justify-center relative bg-[url(https://media.timeout.com/images/105419751/image.jpg)]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold">Styles Boutique</h1>
          <p className="text-lg font-family:'Poppins-Medium' ">
            Welcome to Threads Gazette, where fashion becomes a narrative. Our platform, known as the Style Chronicles, is a dynamic space dedicated to unveiling the latest trends and insights in the ever-evolving world of style. At Threads Gazette, we believe that fashion is not just about clothing; it&apos;s a language, a form of self-expression. Dive into our curated collection of stories that capture the essence of contemporary trends, offering insights into the artistry behind each outfit. Whether you&apos;re seeking inspiration for your next look or eager to stay ahead of the fashion curve, Threads Gazette is your go-to destination for an immersive exploration of style. Join us on this sartorial journey as we navigate the diverse landscape of fashion, revealing the stories behind the trends that shape our evolving aesthetic world
          </p>
        </div>
      </header>

      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Add navigation links if needed */}
        </div>
      </nav>

      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Journal</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalData.map((entry) => (
            <div key={entry.id} className="bg-white rounded-md overflow-hidden shadow-md">
              <Image
                src={entry.image}
                alt={entry.title}
                width={40}
                height={40}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{entry.category}</p>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{entry.title}</h3>
                <p className="text-gray-600">{entry.date}</p>
                <a
                  href={`#/${entry.id}`} // Replace with the actual link or route
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalPage;