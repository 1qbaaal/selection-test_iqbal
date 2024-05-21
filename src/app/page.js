"use client";
import { useEffect, useState } from "react";
// import { useGetRandomNumberQuery } from "~/hooks/useGetRandomNumberQuery";
const countAlphabets = (str) => {
  const alphabetCount = {};
  
  for (let char of str) {
    if (alphabetCount[char]) {
      alphabetCount[char]++;
    } else {
      alphabetCount[char] = 1;
    }
  }
  
  return alphabetCount;
};

 export default function Home  () {
  const randomAlphabet = 'ashdkasfdkajgfljsbfkhavuiqwdjwbfnasjkdajdqwjknbavcoiajsdmabsofadfhmnsdjdgfmvqnbasdhagsdna';
  const [frequency, setFrequency] = useState(countAlphabets(randomAlphabet));
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black">Random Alphabet </h2>
        <p className="mb-4 text-black">{randomAlphabet}</p>
        <ul className="">
          {Object.entries(frequency).map(([char, count]) => (
            <li key={char} className="text-lg text-black">
              {char}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};




