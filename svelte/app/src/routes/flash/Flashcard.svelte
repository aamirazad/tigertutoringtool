<script>
	export let clue;
	export let answer;
	export let showCardBack;
    export let answerWith;
</script>


<div class="flip-box-front">
    {#if answerWith}
        <h2>{clue}</h2>
    {:else}
		<h2>{answer}</h2>
    {/if}
</div>

<div class="flip-box-back" class:conceal-answer={showCardBack}>
    {#if answerWith}
        <h2>{answer}</h2>
    {:else}
		<h2>{clue}</h2>
    {/if}
</div>


<style lang="postcss">
	/* Position the front and back side */
	.flip-box-front, .flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
		box-shadow: -1px 1px 3px black;
	}

	/* Style the front side */
	.flip-box-front {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #272872;
		color: #c6b15a;
		font-size: 1.3rem;
	}
	
	@keyframes revealTextSlowly {
		to { color: white }
	}
	
	.conceal-answer {
		animation: revealTextSlowly .3s forwards;
	}
	
	/* Style the back side */
	.flip-box-back {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #61592F;
		color: #61592F;
/* 		color: white; */
		font-size: 1.3rem;
		transform: rotateY(180deg);
	}
	

</style>
