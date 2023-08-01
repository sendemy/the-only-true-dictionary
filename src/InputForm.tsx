import { BsSearch } from 'react-icons/bs'

interface IInputFormProps {
	setValue: React.Dispatch<React.SetStateAction<string>>
	handleFetch: () => void
}

const InputForm = ({ setValue, handleFetch }: IInputFormProps) => {
	return (
		<form
			onSubmit={(e) => {
				setValue(e.target[0].value)
				handleFetch(e.target[0].value)
				e.target.reset()
				e.preventDefault()
			}}
			className='mb-12'
		>
			<div className='inline-flex'>
				<input
					onMouseEnter={(e) => {
						e.target.attributes[1].textContent = 'e.g. "cat", "time"'
					}}
					onMouseLeave={(e) => {
						e.target.attributes[1].textContent = 'Find...'
					}}
					type='text'
					placeholder='Find...'
					className='flex bg-white px-2 py-3 rounded-lg border shadow-lg focus:outline-none focus:ring-blue-200 focus:border-blue-200 focus:ring-1'
				></input>
				<div className='flex justify-center bg-white rounded-full shadow-lg h-9 w-9 my-auto ml-2 hover:cursor-pointer transition ease-in-out active:scale-90 hover:bg-blue-200 hover:text-white duration-200'>
					<button type='submit'>
						<BsSearch />
					</button>
				</div>
			</div>
		</form>
	)
}

export default InputForm
