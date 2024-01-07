let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAllSelectorAll('.products-container .product').forEach(product =>{
	product.onclick = ()=>{
		preveiwContainer.style.display ='flex';
		let name = product.getAttribute('data-name');
		previewBox.forEach(preview =>{
			let target = preview.getAttribute('data-target');
			if(name == target){
				.preview.classlist.add('active');
			}
		});
	};
});

previewBox.forEach(close =>{
	close.querySelector('.fa-times').on-click = () =>{
		close.classlist.remove('active');
		preveiwContainer.style.display ='none';
	};
});