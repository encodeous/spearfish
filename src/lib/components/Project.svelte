<script lang="ts">
    import { fly } from 'svelte/transition';
    import seedrandom from 'seedrandom';
    import chroma from 'chroma-js'
    import {Link} from "svelte-routing";
    export let name = "";
    let nameCode = seedrandom(name)() * 360;
    export let image = null;
    export let repoUrl = null;
    export let demoUrl = null;
    export let packageUrl = null;
    export let tags : string[] = []
    function getColor(v){
        return chroma.hsv(nameCode, 0.6, v).hex();
    }
    let color = getColor(0.4);
    let secColor = getColor(0.2);
</script>

<div id="{name}" style="--project-color: {color}; --secondary-color: {secColor}"
     class="project mt-10 flex flex-col" in:fly={{y: 100, duration: 1000}}>
    {#if image}
        <div class="relative">
            <img src={image} alt="Cover Image">
            <div class="font-black text-2xl px-1 absolute bottom-0" style="background-color: {color}; bottom: -12pt;">
                {name}
            </div>
        </div>
    {:else}
        <div class="font-black text-3xl relative">
            <p class="absolute pl-2" style="bottom: -12pt">{name}</p>
        </div>
    {/if}

    <div class="title-decor"></div>

    <div class="p-2 flex-grow flex flex-col">
        <div>
            {#if tags.length !== 0}
                {#each tags as tag}
                    <Link to="portfolio/{tag}">
                        <div class="tag-item mx-0.5 rounded-sm px-1 hover:scale-95 transition cursor-pointer mb-1">
                            {tag}
                        </div>
                    </Link>
                {/each}
                <hr>
            {/if}
        </div>
        <div class="p-2 flex-grow">
            <slot/>
        </div>
        <hr>
        <div class="pt-2">
            {#if repoUrl}
                <a class="action-button transition p-1 rounded-sm m-1" target="_blank" href={repoUrl}>
                    <i class="fa-solid fa-code px-1"></i>
                    Source Code
                </a>
            {/if}
            {#if demoUrl}
                <a class="action-button transition p-1 rounded-sm m-1" target="_blank" href={demoUrl}>
                    <i class="fa-solid fa-rocket px-1"></i>
                    Live Demo
                </a>
            {/if}
            {#if packageUrl}
                <a class="action-button transition p-1 rounded-sm m-1" target="_blank" href={packageUrl}>
                    <i class="fa-solid fa-box px-1"></i>
                    Install Package
                </a>
            {/if}
        </div>
    </div>
</div>

<style>
    .project{
        max-width: 400px;
        min-width: calc(min(400px, 90vw));
        border-radius: 5px;
        background-color: #2a2a2a;
    }
    .tag-item {
        display: inline-block;
        background-color: var(--secondary-color);
    }
    .title-decor{
        background: repeating-linear-gradient(45deg, var(--project-color) 0, var(--project-color) 5px, #0000 5px, #0000 10px);
        height: 16px;
    }
    .action-button{
        background-color: var(--project-color);
    }
    .action-button:hover{
        background-color: var(--secondary-color);
    }
</style>