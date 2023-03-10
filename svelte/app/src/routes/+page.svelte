<script>
    import "../app.css";
    let name = ""
  </script>

<h1 class="text-4xl font-bold text-center box-border h-16">Hello{name === "" ? '!' : ' '}
{#if name != ""}
    <h1 class="text-4xl font-bold text-center box-border h-16">{name}</h1>
{/if}
</h1>
<input class="content-center box-border h-8" bind:value={name}>

<p class="text-center text-2xl">
<a class="text-2lg bg-orange-300 hover:font-bold box-border h-16" href="/school">School</a>
<br>
<a class="text-2lg box-border h-16 bg-green-100 hover:font-bold" href="/tutor">Tigertutoringtool</a>
<br>
<a class="text-2lg box-border h-16 bg-green-100 hover:font-bold" href="/flash">Flashcards</a>
</p>
