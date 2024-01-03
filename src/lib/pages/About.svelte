<script>
    import Page from "../components/Page.svelte";
    import {Link} from "svelte-routing";
</script>

<Page pagePath="home/about">
    <div class="mx-10 lg:mx-52 pt-10">
        <div class="font-bold text-6xl f-mono-2">
            Hey!
            <div class="hover:animate-pulse inline-block">
                👋
            </div>
        </div>

        <p>
            My name is Adam, aka <code class="f-mono-2">encodeous</code>.
        </p>

        <br>

        <br>

        <div class="md:text-xl mocha f-mono-2">
            // Who am I?
        </div>

        <p>
            I am a first year (1B) Software Engineering student at the University of Waterloo. I have over 6 years experience in developing applications. For more information, take a look at my <Link to="portfolio" class="mocha">Portfolio</Link> or <a href="#" class="mocha">Resume</a>
        </p>

        <br>

        <div class="md:text-xl mocha f-mono-2">
            // Hobbies
        </div>

        <p>
            When I'm not tinkering around with tech, you might find me playing some games like <code>[<a class="mocha" href="https://polytopia.io/">Polytopia</a>, <a class="mocha" href="https://www.youtube.com/watch?v=wMCrEs1yW9w">MissileWars</a>]</code> or out biking with friends :)
        </p>

        <br>
        <div class="md:text-xl mocha f-mono-2">
            // Tech Stack
        </div>

        <p>
            The technologies powering this website & all of my services are:
        </p>

        <br>

        <div class="grid md:grid-cols-2">
            <div>
                <div class="f-mono-2 tangerine">
                    // Backends
                </div>

                <ul class="list-disc list-inside">
                    <li>ASP.NET Core</li>
                    <li>Node.js</li>
                </ul>
            </div>

            <div>
                <div class="f-mono-2 tangerine">
                    // Frontend (Web)
                </div>

                <ul class="list-disc list-inside">
                    <li>Svelte</li>
                    <li>React</li>
                </ul>
            </div>

            <div>
                <div class="f-mono-2 tangerine">
                    // DevOps & Orchestration
                </div>

                <ul class="list-disc list-inside">
                    <li>Bare Metal Kubernetes / Helm</li>
                    <li>Docker</li>
                    <li>Self-managed GitLab</li>
                </ul>
            </div>

            <div>
                <div class="f-mono-2 tangerine">
                    // Network & Infrastructure
                </div>

                <ul class="list-disc list-inside">
                    <li>Wireguard</li>
                    <li>Mesh Networks (Innernet & Netmaker)</li>
                </ul>
            </div>
        </div>

        <br>

        <div class="md:text-xl mocha f-mono-2">
            // Contact
        </div>

        <p>
            If you want to contact me, you can reach me via email at <a href="mailto:contact@encodeous.ca" class="mocha">contact@encodeous.ca</a> or on Discord through my username <span class="mocha">encodeous</span>
        </p>
    </div>
</Page>