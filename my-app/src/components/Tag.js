import { useState } from 'react';

const Tag = ({ tag, updateTag, deleteTag, color }) => {
	let [isEdit, setIsEdit] = useState(false);
	let [newValue, setNewValue] = useState(tag);
	let [oldValue, setOldValue] = useState(tag);
	return (
		<div
			style={{ background: color }}
			className='d-flex border p-2 mt-1 align-items-center rounded'
		>
			{isEdit ? (
				<input
					type='text'
					className='form-control me-2'
					value={newValue}
					onChange={e => setNewValue(e.target.value)}
				></input>
			) : (
				<span>{tag}</span>
			)}
			{isEdit ? (
				<div className='ms-auto'>
					<div class='btn-group'>
						<button
							type='button'
							onClick={() => {
								updateTag(oldValue, newValue);
								setIsEdit(false);
							}}
							class='btn btn-primary btn-sm'
						>
							<i className='fa-solid fa-save'></i>
						</button>
						<button
							type='button'
							onClick={() => setIsEdit(false)}
							class='btn btn-danger btn-sm'
						>
							<i className='fa-solid fa-times'></i>
						</button>
					</div>
				</div>
			) : (
				<div className='ms-auto'>
					<div class='btn-group'>
						<button
							type='button'
							onClick={() => setIsEdit(true)}
							class='btn btn-primary btn-sm'
						>
							<i className='fa-solid fa-pen'></i>
						</button>
						<button
							onClick={() => deleteTag(tag)}
							type='button'
							class='btn btn-danger btn-sm'
						>
							<i className='fa-solid fa-trash'></i>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Tag;
