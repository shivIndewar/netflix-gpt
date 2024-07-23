import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
 const languageKey = useSelector((store)=> store.lang.selectedLanguage);

  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input className='p-4 m-4 col-span-7' type='text' placeholder={languageKey.gptPlaceHolder} />
            <button className='m-4 bg-red-600 px-2 py-2 rounded-lg col-span-2'>{languageKey.search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar