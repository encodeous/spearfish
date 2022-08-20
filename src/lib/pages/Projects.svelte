<script>
    import Page from "../components/Page.svelte";
    import Project from "../components/Project.svelte";
    import Delayed from "../components/Delayed.svelte";
    import { fly } from 'svelte/transition';
    import { cubicInOut } from 'svelte/easing';
    let count = 0;
    function getDelay(){
        return count += 300;
    }
</script>

<Page pagePath="home/projects">
    <div in:fly={{y: 200, duration: 2000, easing: cubicInOut}} class="h-100 flex pt-32">
        <div class="w-full flex flex-col">
            <Delayed timeout="{getDelay()}">
                <Project name="MissileWarsX">
                    sdfgasdfs
                </Project>
            </Delayed>
            <Delayed timeout="{getDelay()}">
                <Project name="musii">
                    sdfgasdfs
                </Project>
            </Delayed>
            <Delayed timeout="{getDelay()}">
                <Project name="emojipad">
                    sdfgasdfs
                </Project>
            </Delayed>
            <Delayed timeout="{getDelay()}">
                <Project name="Neutrino">
                    sdfgasdfs
                </Project>
            </Delayed>
            <Delayed timeout="{getDelay()}">
                <Project name="GitRCFS">
                    sdfgasdfs
                </Project>
            </Delayed>
            <Delayed timeout="{getDelay()}">
                <Project name="Horizon">
                    sdfgasdfs
                </Project>
            </Delayed>
            <Delayed timeout="{getDelay()}">
                <Project name="wstream">
                    sdfgasdfs
                </Project>
            </Delayed>
        </div>
    </div>
</Page>