function map(arr,value,func) {

	let newArr = [];

	for(let i = 0; i < arr.length; i++) {

		newArr.push(func(arr[i]));
	}
return newArr;
}



console.log(map([5,8,7,15,4,0],3,function (val) {
		return val * 3;
}));