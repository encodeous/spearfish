<script lang="ts">
    import Maze from "../Maze.svelte";
    import { fade, fly } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';
    import {onMount} from "svelte";
    import {Link} from "svelte-routing";
    let ready = false;
    onMount(() => ready = true);

</script>

<div class="fp-back hidden md:block">
    <Maze></Maze>
</div>

<div class="min-h-screen min-w-screen flex items-center justify-center flex-col">
    {#if ready}
        <div class="text-7xl md:text-8xl">
            <div class="md:inline-block" in:fade>
                adam
            </div>
            <div class="md:inline-block" in:fly={{x: 50, duration: 2000, easing: elasticOut, delay: 1000}}>
                chen
            </div>
        </div>
        <div class="flex flex-col md:flex-row text-2xl">
            <div class="page-link" in:fly={{y: 200, duration: 500, delay: 100}}>
                <Link to="about">about.</Link>
            </div>
            <div class="page-link" in:fly={{y: 200, duration: 500, delay: 150}}>
                <Link to="projects">projects.</Link>
            </div>
            <div class="page-link" in:fly={{y: 200, duration: 500, delay: 200}}>
                <Link to="things-i-have-done">stuff i've done.</Link>
            </div>
            <div class="page-link" in:fly={{y: 200, duration: 500, delay: 250}}>
                <a href="https://github.com/encodeous">github.</a>
            </div>
        </div>
    {/if}
</div>

<style>
    .fp-back {
        position: absolute;
        pointer-events: none;
        z-index: -1;
    }
    .page-link{
        @apply p-2 duration-200 ease-in-out font-black cursor-pointer;
        animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .page-link:hover{
        @apply text-3xl text-opacity-100 bg-black;
    }
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: .75;
        }
    }
</style>