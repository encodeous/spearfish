
<script>
    import FrontPage from "./lib/pages/FrontPage.svelte";
    import NotFound from "./lib/pages/NotFound.svelte";
    import { Router, Link, Route } from "svelte-routing";
    import { fly } from 'svelte/transition';
    import About from "./lib/pages/About.svelte";
    import Projects from "./lib/pages/Projects.svelte";
    export let url = "";
</script>

<Router url="{url}">
    <Route path="/" >
       <div in:fly={{y: -20, duration: 100}} class="route-path">
           <FrontPage/>
       </div>
    </Route>
    <Route path="about" >
        <div in:fly={{y: -20, duration: 100}} class="route-path">
            <About/>
        </div>
    </Route>
    <Route path="projects" >
        <div in:fly={{y: -20, duration: 100}} class="route-path">
            <Projects/>
        </div>
    </Route>
<!--    <Route path="/about"></Route>-->
<!--    <Route path="/projects" ></Route>-->
<!--    <Route path="/stuff-i-have-done" ></Route>-->
    <Route path="/*">
        <div in:fly={{y: -20, duration: 100}} class="route-path">
            <NotFound/>
        </div>
    </Route>
</Router>


<style>
    .route-path{
        @apply overflow-clip;
        min-height: 100%;
    }
</style>