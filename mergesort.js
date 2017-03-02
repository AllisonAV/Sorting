function split(arr) {
	var doubleArr = []
	var half = Math.ceil(arr.length / 2);

	doubleArr.push(arr.slice(0,half));
	doubleArr.push(arr.slice(half));


	return doubleArr;
}

function merge(arr1, arr2) {

var final = [];
for (var i=0; i<arr1.length; i++ ) {
	if (arr1[i] < arr2[0]) {
		final.push(arr1[i]);
	} else {
		final.push(arr2[0]);
		arr2.shift();
	}
}
return final;

}



function mergeSort(arr) {
	var arr1 = arr[0];
	var arr2 = arr[1];
	var final = [];

	if (arr1.length === 1  && arr2.length === 1) {
		if (arr1[0] > arr2[0]) {
			final.push(arr2[0]);
			final.push(arr1[0]);
		} else {
			final.push(arr1[0]);
			final.push(arr2[0]);
		}
		
	} else {
		final = final.concat(mergeSort(split(arr1)));
		final = final.concat(mergeSort(split(arr2)));



	}
	return final;
}