let myCount = 1;
const myPromise = new Promise((resolve, reject) => {
	if (myCount == 0) {
		resolve("My Count == 0");
	} else {
		reject("Error My Count !== 0");
	}
});

myPromise
	.then(function (data) {
		console.log(data);
	})
	.catch(function (error) {
		console.log(error);
	});
