import { BsFillBookmarkStarFill } from 'react-icons/bs'

const BookmarkList = () => {
	return (
		<div className='flex justify-center w-fit bg-white p-1 rounded-lg mx-auto shadow-lg text-center font-bold text-4xl text-blue-950 hover:cursor-pointer transition ease-in-out active:scale-90 hover:bg-blue-200 hover:text-white duration-200'>
			<button>
				<BsFillBookmarkStarFill />
			</button>
		</div>
	)
}

export default BookmarkList
