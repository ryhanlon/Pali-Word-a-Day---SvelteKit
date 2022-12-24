<script>
import WordCard from './WordCard.svelte';
export let data;
console.log(data.words);

const wordData = data.words;

let wordIndex = 0;

let word = wordData[wordIndex].word;
let definition = wordData[wordIndex].translations.eng.translation;
</script>

<svelte:head>
	<title>Pali Word a Day</title>
	<meta name="description" content="Pali Word a Day" />
</svelte:head>

<section>
	<WordCard 
	{word}
	{definition} />
</section>


