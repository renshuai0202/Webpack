let name = 'zhangsan';
// const say = () => {
// 	console.log('Hello my name is ', this.name);
// }
function say() {
	console.log('Hello my name is ', this.name);
}

export {
	name,
	say
}