import { useEffect, useState } from 'react';

const ImageFrame = ({ colors, id, src, name, applyTags }) => {
	let [selectedTags, setSelectedTags] = useState([]);
	let [isDropdownOpened, setIsDropdownOpened] = useState(false);
	const getTags = () => {
		let tags = JSON.parse(localStorage.getItem('tags')) || [];
		return tags;
	};
	const handleOutClick = e => {
		let dropdownToggler = document.getElementById(`dropdown-toggler${id}`);
		let dropdownMenu = document.getElementById(`dropdown-menu${id}`);
		if (
			dropdownToggler &&
			!dropdownToggler.contains(e.target) &&
			dropdownMenu &&
			!dropdownMenu.contains(e.target)
		) {
			setIsDropdownOpened(false);
		}
	};
	useEffect(() => {
		window.addEventListener('click', handleOutClick);
		return () => {
			window.removeEventListener('click', handleOutClick);
		};
	}, []);
	const isTagSelected = tag => {
		let isSelected = selectedTags.find(_tag => _tag == tag);
		return isSelected != null;
	};
	const handleTagClick = tag => {
		if (isTagSelected(tag)) {
			setSelectedTags(prevState => {
				prevState = prevState.filter(_tag => _tag != tag);
				return [...prevState];
			});
		} else {
			setSelectedTags(prevState => {
				prevState.push(tag);
				return [...prevState];
			});
		}
	};
	return (
		<div className='w-100'>
			<img src={src} className='w-100 image-container' />
			<div className='d-flex align-items-center'>
				<span>{name}</span>
				<div className='position-relative ms-auto '>
					<i
						id={`dropdown-toggler${id}`}
						className='fa fa-tag cursor-pointer'
						onClick={() =>
							setIsDropdownOpened(prevState => !prevState)
						}
					></i>
					{isDropdownOpened && (
						<div
							id={`dropdown-menu${id}`}
							className='position-absolute shadow border p-2 bg-white tag-dropdown'
						>
							{getTags().map((tag, idx) => (
								<div
									style={{ background: colors[idx] }}
									className={`p-2 tag ${
										idx != 0 ? 'mt-2' : ''
									} ${isTagSelected(tag) ? 'selected' : ''}`}
									onClick={() => handleTagClick(tag)}
								>
									{tag}
								</div>
							))}
							<button
								onClick={e => {
									setIsDropdownOpened(false);
									applyTags(id, selectedTags);
									setSelectedTags([]);
								}}
								className='btn btn-success d-block w-100 mt-2'
							>
								Apply
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImageFrame;
