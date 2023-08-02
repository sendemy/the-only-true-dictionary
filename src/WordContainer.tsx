// interface IWordDataObject {
// 	word: string
// 	phonetic: string
// 	phonetics: Array<object>
// 	meanings: Array<object>
// 	license: object
// 	sourceUrls: Array<string>
// }

import BookmarkAdd from './BookmarkAdd'
import WordDefinition from './WordDefinition'

// interface IWordContainerProps {
// 	wordData: IWordDataObject[]
// }

interface IWordContainerProps {
	wordData: object
	handleFetch: (word: string) => void
}

const WordContainer = ({ wordData, handleFetch }: IWordContainerProps) => {
	// console.log('wordDef rendered')
	// console.log(wordData)
	// console.log(wordData[0].meanings[0].definitions[0].definition)

	const defs = []

	for (const wordObj of wordData.list) {
		defs.push([wordObj.definition, wordObj.example])
	}

	const finalDefs = []

	for (let [def, example] of defs) {
		const editedDef = []
		const editedExample = []

		if (def.includes(']')) {
			editedDef.push(def.slice(0, def.indexOf('[')))
		}
		while (def.includes(']')) {
			const strToAdd = def.slice(def.indexOf('['), def.indexOf(']'))
			def = def.replace('[', '')
			editedDef.push(strToAdd)
			const bracketCount = def.length - def.replaceAll(']', '').length
			if (def.includes('[')) {
				const strToAddRest = def.slice(def.indexOf(']') + 1, def.indexOf('['))
				// console.log('works')
				editedDef.push(strToAddRest)
			} else if (bracketCount === 1) {
				const strToAddRest = def.slice(def.indexOf(']') + 1)
				editedDef.push(strToAddRest)
			}
			def = def.replace(']', '')
		}

		if (example.includes(']')) {
			editedExample.push(example.slice(0, example.indexOf('[')))
		}
		while (example.includes(']')) {
			const strToAdd = example.slice(example.indexOf('['), example.indexOf(']'))
			example = example.replace('[', '')
			editedExample.push(strToAdd)
			const bracketCount = example.length - example.replaceAll(']', '').length
			if (example.includes('[')) {
				const strToAddRest = example.slice(
					example.indexOf(']') + 1,
					example.indexOf('[')
				)
				// console.log('works')
				editedExample.push(strToAddRest)
			} else if (bracketCount === 1) {
				const strToAddRest = example.slice(example.indexOf(']') + 1)
				editedExample.push(strToAddRest)
			}
			example = example.replace(']', '')
		}

		finalDefs.push([editedDef, editedExample])
	}

	return (
		<div className='flex flex-col justify-center text-center items-center'>
			<div className='bg-blue-300 flex w-fit rounded-md px-4 py-2 mb-8 gap-16 shadow-lg'>
				<span className='font-semibold text-2xl'>{wordData.list[0].word}</span>
				<span title='Add to bookmarks' className='font-normal text-2xl'>
					{/* {wordData.list[0].word} */}
					<BookmarkAdd word={wordData.list[0].word} />
				</span>
			</div>
			<div>
				{/* {wordData.list.map((el: object) => (
					<div className='my-4 w-full rounded-lg'>
						<p className='font-normal bg-blue-100 rounded-md px-4 py-2 shadow-lg'>
							<span className='font-semibold'>Definition: </span>
							{el.definition.replaceAll('[', '').replaceAll(']', '')}
						</p>
						<p className='font-normal bg-blue-100 rounded-md px-4 py-2 shadow-lg'>
							<span className='font-semibold'>Example: </span>
							{el.example.replaceAll('[', '').replaceAll(']', '')}
						</p>
					</div>
				))} */}

				<WordDefinition handleFetch={handleFetch} finalDefs={finalDefs} />
			</div>
		</div>
	)
}

export default WordContainer
