import { BsFillBookmarkPlusFill } from 'react-icons/bs'

interface IBookmarkAddProps {
	word: string
	storageBookmarks: string[]
	setStorageBookmarks: React.Dispatch<React.SetStateAction<never[]>>
}

const BookmarkAdd = ({
	word,
	storageBookmarks,
	setStorageBookmarks,
}: IBookmarkAddProps) => {
	function storeBookmarks() {
		if (localStorage.getItem('bookmarks') == null) {
			const bookmarksToStore = [word]
			setStorageBookmarks(() => [word])
			localStorage.setItem('bookmarks', JSON.stringify(bookmarksToStore))
			console.log(localStorage.getItem('bookmarks'), 'if null')
		} else {
			if (!localStorage.getItem('bookmarks')!.includes(word)) {
				const storageItems = JSON.parse(localStorage.getItem('bookmarks'))
				const bookmarksToStore = [...storageItems, word]
				// setStorageBookmarks((prevValue) => [...prevValue, word])
				setStorageBookmarks(() => bookmarksToStore)
				localStorage.setItem('bookmarks', JSON.stringify(bookmarksToStore))
				console.log(localStorage.getItem('bookmarks'), 'if not null')
			}
		}
	}

	return (
		<div
			className='flex justify-center w-fit bg-blue-100 p-1 rounded-lg mx-auto shadow-lg text-center font-bold text-2xl text-blue-950 hover:cursor-pointer transition ease-in-out active:scale-90 hover:bg-blue-200 hover:text-white duration-200'
			onClick={storeBookmarks}
		>
			<BsFillBookmarkPlusFill />
		</div>
	)
}

export default BookmarkAdd
