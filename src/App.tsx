import { useState } from 'react'
import { BsBook } from 'react-icons/bs'
import BookmarkList from './BookmarkList'
import InputForm from './InputForm'
import WordContainer from './WordContainer'

function App() {
	const [wordData, setWordData] = useState([])
	const [value, setValue] = useState('')
	const [error, setError] = useState('')

	const handleFetch = async (word: string) => {
		const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'dd6affc026msheecffc7ecf5c1edp1e069ajsn2308cd2723c0',
				'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com',
			},
		}

		try {
			const response = await fetch(url, options)
			if (!response.ok) {
				throw new Error('error')
			}
			const data = await response.json()
			setWordData(data)
			console.log(data)
			setValue('')
			setError('')
		} catch (error) {
			setError('Word not found')
			setWordData([])
		}
	}

	return (
		<div className='font-bold flex flex-row items-center gap-12'>
			<div className='flex-auto justify-center text-center basis-1/2'>
				<div className='w-fit bg-sky-100 mx-auto rounded-2xl pt-24 pb-12 px-12 shadow-lg float-right'>
					<div>
						<div className='flex justify-center text-center font-bold text-9xl text-blue-950 animate-animateHeart transition ease-in-out active:scale-110 hover:text-red-600 duration-500'>
							<BsBook />
						</div>
						<div className='font-bold text-4xl text-blue-950 mb-2'>
							Dictionary
						</div>
						<div className='font-thin text-blue-950 mb-12'>
							The only true dictionary.
						</div>
					</div>
					<InputForm setValue={setValue} handleFetch={handleFetch} />
					<BookmarkList />
				</div>
			</div>

			<div className='flex-auto justify-center text-center w-fit basis-1/2'>
				<div className='w-fit bg-sky-100 mx-auto rounded-2xl py-20 px-4 shadow-lg float-left'>
					{typeof wordData.list != 'undefined' ? (
						<WordContainer wordData={wordData} handleFetch={handleFetch} />
					) : (
						<p>{error}</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default App
