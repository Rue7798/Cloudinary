import Tag from './Tag';

const AvailableTags = ({ colors, updateTag, deleteTag }) => {
	const getTags = () => {
		let tags = JSON.parse(localStorage.getItem('tags')) || [];
		return tags;
	};
	return (
		<>
			<label className='text-center w-100'>Available tags</label>
			<div className='w-100 mt-2'>
				{getTags().length == 0 && (
					<small className='d-block w-100 text-center'>
						No Tag Yet!
					</small>
				)}
				{getTags().map((tag, key) => (
					<Tag
						color={colors[key]}
						updateTag={updateTag}
						deleteTag={deleteTag}
						key={'Tag' + key}
						tag={tag}
					/>
				))}
			</div>
		</>
	);
};

export default AvailableTags;
