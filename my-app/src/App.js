import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AddTagForm from './components/AddTagForm';
import AvailableTags from './components/AvailableTags';
import ImageFrame from './components/ImageFrame';

function App() {
	const [images, setImages] = useState([
		{
			image: {
				id: '',
				download_url: '',
			},
			tags: [],
		},
	]);
	const [update, setUpdate] = useState(false);
	const [tag, setTag] = useState('');
	let [selectedTags, setSelectedTags] = useState([]);
	let colors = [
		'aliceblue','azure','lightblue','lightcyan','lightskyblue','paleturquoise','powderblue ','skyblue ','aliceblue',
'azure','lightblue','lightcyan','lightskyblue','paleturquoise','powderblue ','skyblue ',];

	useEffect(() => {
		let saved = localStorage.getItem('images');
		if (saved == null) {
			axios
				.get('https://picsum.photos/v2/list?limit=10')
				.then(response => {
					let arr = [];
					response.data.forEach((img, idx) => {
						arr.push({
							id: img.id,
							url: img.download_url,
							name: 'Photo ' + Number(Number(idx) + 1),
							tags: [],
						});
					});
					setImages(arr);
					localStorage.setItem('images', JSON.stringify(arr));
				});
		} else {
			setImages(JSON.parse(saved));
		}
	}, []);

	const updateTag = (oldValue, newValue) => {
		let tags = JSON.parse(localStorage.getItem('tags'));
		let idx = tags.indexOf(oldValue);
		tags[idx] = newValue;
		localStorage.setItem('tags', JSON.stringify(tags));
		setUpdate(prevState => !prevState);
	};
	const deleteTag = value => {
		let tags = JSON.parse(localStorage.getItem('tags'));
		tags = tags.filter(_tag => _tag != value);
		localStorage.setItem('tags', JSON.stringify(tags));
		setUpdate(prevState => !prevState);
	};
	const getTags = () => {
		let tags = JSON.parse(localStorage.getItem('tags')) || [];
		return tags;
	};
	const addTag = () => {
		let tags = JSON.parse(localStorage.getItem('tags')) || [];
		if (tag == '') {
			alert('Tag cannot be empty.');
		} else {
			let isAlreadyTag = tags.find(_tag => _tag == tag);
			if (isAlreadyTag) alert('Tag already exists');
			else {
				tags.push(tag);
				localStorage.setItem('tags', JSON.stringify(tags));
				setTag('');
			}
		}
	};
	const getUnassignedImages = () => {
		return images.filter(image => image.tags.length == 0);
	};
	const applyTags = (id, tags) => {
		setImages(prevState => {
			let idx = prevState.findIndex(image => image.id == id);
			prevState[idx].tags = tags;
			localStorage.setItem('images', JSON.stringify(prevState));
			return [...prevState];
		});
	};
	const getTagImages = tag => {
		let tagImages = images.filter(
			image => image.tags.find(_tag => _tag == tag) != null
		);
		return tagImages;
	};
	const deleteImageTag = (imageId, tag) => {
		setImages(prevState => {
			let imageIdx = prevState.findIndex(image => image.id == imageId);
			prevState[imageIdx].tags = prevState[imageIdx].tags.filter(
				_tag => _tag != tag
			);
			localStorage.setItem('images', JSON.stringify(prevState));
			return [...prevState];
		});
	};

	return (
		<div className='App'>
			<div className='container-fluid pt-2'>
				<div className='row'>
					<div className='col-lg-3'>
						<div className='border p-2'>
							<AddTagForm
								addTag={addTag}
								setTag={setTag}
								tag={tag}
							/>
							<hr />
							<AvailableTags
								colors={colors}
								updateTag={updateTag}
								deleteTag={deleteTag}
							/>
						</div>
					</div>
					<div className='col-lg-9 mt-2 mt-lg-0'>
						<div className='border p-2'>
							<label className='d-block fw-bold border-bottom pb-2'>
								Unassigned
							</label>
							<div className='mt-2'>
								<div className='row'>
									{getUnassignedImages().map(image => (
										<div className='col-sm-6 col-md-4 mb-4'>
											<ImageFrame
												colors={colors}
												id={image.id}
												src={image.url}
												name={image.name}
												applyTags={applyTags}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className='row mb-5'>
							{getTags().map((tag, idx) => (
								<div className='col-md-4 mt-2'>
									<div className='border tag-container'>
										<div
											style={{
												background: colors[idx],
											}}
											className='p-2'
										>
											<label className='d-block fw-bold'>
												{tag}
											</label>
										</div>
										<div className='mt-2  p-2'>
											{getTagImages(tag).map(
												(image, idx) => (
													<div
														key={`${tag}${idx}`}
														className={`d-flex align-items-center ${
															idx != 0
																? 'mt-2'
																: ''
														}`}
													>
														<img
															src={image.url}
															className='thumbnail-image me-2'
														/>
														<small>
															{image.name}
														</small>
														<button
															onClick={() =>
																deleteImageTag(
																	image.id,
																	tag
																)
															}
															className='ms-auto btn btn-sm btn-danger'
														>
															<i className='fa fa-trash'></i>
														</button>
													</div>
												)
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
