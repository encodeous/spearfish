<script>
    import { onMount } from 'svelte';

    export let timeout;
    let hidden = true;

    onMount(() => {
        setTimeout(() => {
            hidden = false;
        }, timeout);
    });
</script>

{#if !hidden}
    <slot/>
{/if}