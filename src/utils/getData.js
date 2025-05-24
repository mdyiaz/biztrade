export const getData = async (url) => {
	const res = await fetch('https://dummyjson.com' + url, {
	});
	// console.log({res});
	const data = await res.json();
	if (!res.ok) {
		console.log('error', res);
	}
	return data;
};