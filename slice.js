function slice(arr,start,end) {

	let newArr = [];
	let newStr = '';
	
if(Array.isArray(arr) === true){
	if(start >= 0 && end > 0){

			for(let i = start; i < end; i++) {

				newArr.push(arr[i]);
				
			}

		}
		else if(start < 0 && end < 0 && end > start) {
			
			for(let i = arr.length + start; i < arr.length + end; i++){
				
				newArr.push(arr[i]);
			}
		}
		else if(start > 0 && end === undefined){

			for(let i = start; i < arr.length; i++) {
				
				newArr.push(arr[i]);
			}
		}
		else if(start < 0 && end === undefined && arr.length + start > 0) {

				for(let i = arr.length + start; i < arr.length; i++){
			
					newArr.push(arr[i]);
		 	}
		 }
		else {
				return arr;
		 }	
	
		return newArr;
}
	else if(typeof arr === 'string') {
		if(start >= 0 && end > 0){

			for(let i = start; i < end; i++) {

				
				
			}

		}
		else if(start < 0 && end < 0 && end > start) {
			
			for(let i = arr.length + start; i < arr.length + end; i++){
				
				newStr += arr[i];
			}
		}
		else if(start > 0 && end === undefined){

			for(let i = start; i < arr.length; i++) {
				
				newStr += arr[i];
			}
		}
		else if(start < 0 && end === undefined && arr.length + start > 0) {

				for(let i = arr.length + start; i < arr.length; i++){
			
					newStr += arr[i];
		 	}
		 }
		else {
				return arr;
		 }	
	
		return newStr;
	}
	else {
		return 'enter string or array';
	}	
		
}


console.log(['H','e','l','lo', 'World'].slice(0,3));
console.log(slice(['H','e','l','lo', 'World'],0,3));
console.log('Hello World'.slice(0));
console.log(slice('Hello World',0));
console.log('Hello World'.slice(-4,-1));
console.log(slice('Hello World',-4,-1));
console.log('Hello World'.slice(2));
console.log(slice('Hello World',2));
console.log('Hello World'.slice(-5));
console.log(slice('Hello World',-5));
console.log('Hello World'.slice(-15));
console.log(slice('Hello World',-15));

