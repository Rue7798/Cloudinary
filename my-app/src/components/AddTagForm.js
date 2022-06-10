

const AddTagForm = ({ tag, setTag ,addTag }) => {
	return (
		<>
			<input
				className='form-control'
				placeholder='New tag...'
				value={tag}
				onChange={e => setTag(e.target.value)}
			></input>
			<button
				onClick={addTag}
				className='btn btn-success d-block w-100 mt-2'
			>
				Save
			</button>
		</>
	);
};

export default AddTagForm;
