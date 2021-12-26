function slice(str,start,end) {

	let newStr = '';
	

		if(start >= 0 && end > 0){

			for(let i = start; i < end; i++) {

				newStr += str[i];
				
			}

		}
		else if(start < 0 && end < 0 && end > start) {
			
			for(let i = str.length + start; i < str.length+end; i++){
				
				newStr += str[i];
			}
		}
		else if(start > 0 && end === undefined){

			for(let i = start; i < str.length; i++) {
				
				newStr += str[i];
			}
		}
		else if(start < 0 && end === undefined && str.length + start > 0) {
			
				for(let i = str.length + start; i < str.length; i++){
			
					newStr += str[i];
		 	}
		 }
		else {
				return str;
		 }	
	
		return newStr;
		
}


console.log('Hello World'.slice(0,3));
console.log(slice('Hello World',0,3));
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

