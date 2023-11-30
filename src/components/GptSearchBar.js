import React from 'react';
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
    const language = useSelector(state => state.config.lang);

    console.log('lang', lang[language])
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12">
            <input type='text' placeholder={lang[language].gptSearchPlaceholder} className=" p-4 m-4 col-span-9" />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar