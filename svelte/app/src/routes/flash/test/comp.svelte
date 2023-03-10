<script>
	import { vocab } from './vocabData.js';
	
	import Flashcard from '../Flashcard.svelte';

	let flashcardIndex = 0;
    let answerWith;
    let clue;
    let answer;

    $: if (answerWith === "true") {
        clue = vocab[flashcardIndex].clue;
        answer = vocab[flashcardIndex].word;
    }
    $: if (answerWith === "false") {
        clue = vocab[flashcardIndex].word;
        answer = vocab[flashcardIndex].clue;
    }
	

	let showCardBack = false;
    const toggleShowBack = () => showCardBack = !showCardBack;
    const prevCard = () => {
		showCardBack = false;
		if (flashcardIndex === 0) {
			flashcardIndex = vocab.length-1;
		} else {
			flashcardIndex -= 1;
		}
	}
	
	const nextCard = () => {
		showCardBack = false;
		if (flashcardIndex === vocab.length-1) {
			flashcardIndex = 0;
		} else {
			flashcardIndex += 1;
		}	
	}
</script>

<main>
	<!-- FLASHCARD -->
	<div class="flip-box">
    		<div class="flip-box-inner" class:flip-it={showCardBack}>
			<Flashcard {clue} 
								 {answer} 
								 {showCardBack} 
                                 {answerWith}
								 />
		</div>
	</div>

	<!-- BUTTONS -->
	<div id="btn-cont">
		<button class="arrow-btn" on:click={prevCard}>&#8592;</button>
		
		<button on:click={toggleShowBack}>
			{showCardBack ? "Hide Answer" : "Show Answer"}
		</button>
		
		<button class="arrow-btn" on:click={nextCard}>&#8594;</button>
	</div>
    <label id="label-answer" for="answerWith" class="font-bold">Answer with
    <select name="answerWith" id="answerWith"  bind:value={answerWith}>
        <option value="true">Term</option>
        <option value="false">Definition</option>
    </select>
</main>	


<style lang="postcss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
        overflow: hidden;
	}
	
	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 500px;
		height: 400px;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}
	
	#btn-cont {
		width: 200px;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
	}

	button {
		background-color: 	hsl(65, 6%, 40%);
		padding: 10px 10px;
		color: white;
		cursor: pointer;
	}
	
	button:active {
		background-color: hsl(50, 65%, 25%);
	}

#label-answer {
		background-color: #1d1e20;
		padding: 10px 10px;
		color: white;
		cursor: pointer;
    }

</style>
