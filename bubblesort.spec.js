describe('Bubble Sort', function() {

	it('handles an empty array', function() {
		expect( bubbleSort([])).toEqual([]);
	});

	it('handles an array with one element', function() {
		expect( bubbleSort([1])).toEqual([1]);
	});

	it('handles an array with two elements', function() {
		expect( bubbleSort([2,1])).toEqual([1,2]);
	});

	it('handles an array with five elements', function() {
		expect( bubbleSort([2,1,5,3,4])).toEqual([1,2,3,4,5]);
		
	});

	it('spy on how many times swap is called', function() {
		spyOn(window, "swap").and.callThrough();
		bubbleSort([5, 4, 3, 2, 1]);
		expect( swap.calls.count() ).toEqual(10);
	})

	it('handles a more complex array of numbers', function() {
		expect( bubbleSort([2, 25, 1, 35, 8, 99])).toEqual([1, 2, 8, 25, 35, 99]);
	});

});


