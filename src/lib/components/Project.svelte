<script>
    import { fly } from 'svelte/transition';
    import seedrandom from 'seedrandom';
    import chroma from 'chroma-js'
    export let name = "";
    let nameCode = seedrandom(name)() * 360;
    export let image = null;
    export let repoUrl = "";
    export let demoUrl = "";
    function getColor(){
        return chroma.hsv(nameCode, 0.6, 0.6).hex();
    }
    let color = getColor();
</script>

<div style="--project-color: {color}" class="project grid" in:fly={{y: 20, duration: 1000}}>
    <div class="title font-black text-3xl">
        {name}
    </div>
    <slot/>
</div>

<style>
    .project{
        max-width: 400px;
        margin: 0 auto;
        grid-template-rows: 1fr 50px;
    }
    .title{
        background: repeating-linear-gradient(45deg, var(--project-color) 0, var(--project-color) 5px, #0000 5px, #0000 10px);
    }
</style>