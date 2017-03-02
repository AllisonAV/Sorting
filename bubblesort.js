function bubbleSort(arr) {

	for (var i = 0; i < arr.length; i++) {
		arr.forEach(function(el, i){
			if (el > arr[i+1]) {
				swap(el, arr[i+1], i, arr);
			}
		});
	}

	

	return arr;
}

function swap(el1, el2, i, arr) {
	var hold = el1;
	arr[i] = el2;
	arr[i+1] = hold;
	return arr;
};
