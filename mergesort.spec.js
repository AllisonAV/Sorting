describe('Split Array Function', function() {
	it('is able to split a two element array into two one element arrays', function() {
		expect(split([1, 2])).toEqual([[1], [2]]);
	});

	it('is able to split a 7 element array into a 4 and a 3 element array', function() {
		expect(split([1, 2,3,4,5,6,7])).toEqual([[1,2,3,4], [5,6,7,]]);
	});
})

describe('Merge', function() {
	it('is able to merge two sorted arrays into one sorted array', function(){
		expect(merge([[1,3], [2,4]])).toEqual([1,2,3,4]);
	});

// describe('Merge Sort', function() {
// 	it('is able to merge two sorted arrays into one sorted array', function(){
// 		expect(mergeSort([[3,1,], [4,2]])).toEqual([1,2,3,4]);
// 	});

});