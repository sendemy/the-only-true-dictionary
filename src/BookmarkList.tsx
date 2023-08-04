import { BsFillBookmarkStarFill, BsFillBookmarkXFill } from 'react-icons/bs'

interface IBookmarkListProps {
	bookmarksOn: boolean
	setBookmarksOn: React.Dispatch<React.SetStateAction<boolean>>
}

const BookmarkList = ({ bookmarksOn, setBookmarksOn }: IBookmarkListProps) => {
	function handleSetBookmarksOn() {
		console.log(!bookmarksOn)
		setBookmarksOn((prevValue) => !prevValue)
	}

	return (
		<div
			className='flex justify-center w-fit bg-white p-1 rounded-lg mx-auto shadow-lg text-center font-bold text-4xl text-blue-950 hover:cursor-pointer transition ease-in-out active:scale-90 hover:bg-blue-200 hover:text-white duration-200'
			onClick={handleSetBookmarksOn}
		>
			<button>
				{bookmarksOn ? <BsFillBookmarkXFill /> : <BsFillBookmarkStarFill />}
			</button>
		</div>
	)
}

export default BookmarkList
