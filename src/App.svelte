
<script>
    import FrontPage from "./lib/pages/FrontPage.svelte";
    import NotFound from "./lib/pages/NotFound.svelte";
    import { Router, Link, Route } from "svelte-routing";
    import { fly } from 'svelte/transition';
    import About from "./lib/pages/About.svelte";
    import Portfolio from "./lib/pages/Portfolio.svelte";
    import {loadData} from "./lib/ts/api";
    export let url = "";
    loadData()
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
    <Route path="portfolio/:tag" let:params>
        <div in:fly={{y: -20, duration: 100}} class="route-path">
            <Portfolio tag="{params.tag}"/>
        </div>
    </Route>
    <Route path="portfolio">
        <div in:fly={{y: -20, duration: 100}} class="route-path">
            <Portfolio/>
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