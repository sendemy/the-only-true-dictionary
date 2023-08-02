interface IWordDefinitionProps {
	finalDefs: Array<Array<Array<string>>>
	handleFetch: (word: string) => void
}

const WordDefinition = ({ finalDefs, handleFetch }: IWordDefinitionProps) => {
	return (
		<div className='my-4 w-full rounded-lg'>
			{finalDefs.map((line, ind) => (
				<div
					className='my-4 w-full rounded-lg bg-blue-200 shadow-md px-4 py-2'
					key={ind}
				>
					<p>
						<span>Definition: </span>
						{line[0].map((el: string, ind) =>
							el.includes('[') ? (
								<span
									className='inline-block hover:cursor-pointer transition ease-in-out hover:scale-105 hover:text-blue-900 duration-200'
									onClick={(e) => handleFetch(el.slice(1))}
									key={ind}
								>
									{el.slice(1)}
								</span>
							) : (
								<span className='font-normal' key={ind}>
									{el}
								</span>
							)
						)}
					</p>
					<p>
						<span>Example: </span>
						{line[1].map((el: string, ind) =>
							el.includes('[') ? (
								<span
									className='inline-block hover:cursor-pointer transition ease-in-out hover:scale-105 hover:text-blue-900 duration-200'
									onClick={(e) => handleFetch(el.slice(1))}
									key={ind}
								>
									{el.slice(1)}
								</span>
							) : (
								<span className='font-normal' key={ind}>
									{el}
								</span>
							)
						)}
					</p>
				</div>
			))}
		</div>
	)
}

export default WordDefinition
