import { words } from './data.js';

//get data objext
//find one word
//auto generate index number
//use index to get word data
//use load function to pass word to +page.svelte
//use setTimeOut() for timer, then get word
export function load() {
	return {
		words
	};
}
