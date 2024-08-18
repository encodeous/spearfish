import {apiEndpoint} from "./config";
import {portfolio} from "./store";

const pf_data = `{
    "items": [
        {
            "name": "MissileWarsX",
            "weight": 8,
            "tags": [
                "java",
                "minecraft",
                "plugin-development",
                "spigot"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/MissileWarsX.git"
                }
            ],
            "image": "$root/assets/portfolio/missile-wars.png",
            "content": "An open source implementation of the legendary MissileWars mini-game originally conceived by SethBling and Cubehamster. MwX is a performant plugin that uses FastAsyncWorldEdit and a plethora of Minecraft internal tricks to run the minigame without lag."
        },
        {
            "name": "hosts.net",
            "weight": 7,
            "tags": [
                "dotnet",
                "library"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/hosts.net.git"
                },
                {
                    "name": "Install Package",
                    "icon": "fa-box",
                    "link": "https://www.nuget.org/packages/hosts.net"
                }
            ],
            "content": "A utility library for managing the hosts file on Windows, Linux and Mac. It currently has the following download count: <img alt=\\"Nuget\\" src=\\"https://img.shields.io/nuget/dt/hosts.net?style=flat&color=%23ffffff\\">"
        },
        {
            "name": "GitRCFS",
            "weight": 7,
            "tags": [
                "dotnet",
                "library",
                "git"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/gitrcfs.git"
                },
                {
                    "name": "Install Package",
                    "icon": "fa-box",
                    "link": "https://www.nuget.org/packages/GitRCFS"
                }
            ],
            "content": "GitRCFS offers a lightweight API to synchronize an application's configuration / data files with a remote git repository. The API is designed in a natural way for rapid prototyping. It currently has the following download count: <img alt=\\"Nuget\\" src=\\"https://img.shields.io/nuget/dt/GitRCFS?style=flat&color=%23ffffff\\">"
        },
        {
            "name": "This Website",
            "weight": 8,
            "tags": [
                "dotnet",
                "javascript",
                "svelte",
                "kubernetes"
            ],
            "links": [
                {
                    "name": "OpenAPI Spec",
                    "icon": "fa-layer-group",
                    "link": "https://api.encodeous.ca/swagger/index.html"
                },
                {
                    "name": "Frontend Source",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/spearfish"
                }
            ],
            "content": "This website is the culmination of many technologies, and is a great example of how to use the GitRCFS library. The webpage you are reading right now is generated live from <a class=\\"tangerine\\" href=\\"https://github.com/encodeous/site-data\\">this repo</a>. For more info, see <a class=\\"tangerine\\" href=\\"$blog/spearfish\\">this blog post</a>."
        },
        {
            "name": "WyRIM",
            "weight": 6,
            "tags": [
                "java",
                "minecraft",
                "fabric-modding"
            ],
            "image": "$root/assets/portfolio/wyrim.png",
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/WyRIM.git"
                },
                {
                    "name": "Watch Demo",
                    "icon": "fa-video",
                    "link": "https://www.youtube.com/watch?v=goahlUHhgWg"
                }
            ],
            "content": "WyRIM is a high-level wrapper UI for the vanilla Wynncraft item bank. It provides a much more user friendly interface by turning the original chest-based UI into a searchable, scrollable and sortable container."
        },
        {
            "name": "PaperTime",
            "weight": 6,
            "tags": [
                "java",
                "minecraft",
                "server-fork"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/PaperTime.git"
                }
            ],
            "content": "PaperTime is a specialized Paper fork that enables technical players to manipulate the game speed (TPS) using an in-game command. This was made long before Mojang added this feature to the native game."
        },
        {
            "name": "4Plumbers",
            "weight": 8,
            "tags": [
                "javascript",
                "web-design",
                "client",
                "astrojs"
            ],
            "links": [
                {
                    "name": "View Site",
                    "icon": "fa-link",
                    "link": "https://4plumbers.ca/"
                }
            ],
            "content": "Developed a client website for a plumbing company in the local area. The site was built in Astro, and hosted on Cloudflare."
        },
        {
            "name": "Goldfish",
            "weight": 9,
            "tags": [
                "dotnet",
                "algorithms",
                "library",
                "cli"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/goldfish.git"
                },
                {
                    "name": "API Docs",
                    "icon": "fa-file",
                    "link": "https://encodeous.github.io/goldfish/"
                }
            ],
            "content": "Goldfish is a complete Chess Engine and framework for chess written entirely in .NET. The engine uses techniques such as Alpha-Beta pruning, Transposition Tables, Iterative Deepening, and concurrent/parallel search to achieve a high level of performance. The engine is relatively strong, and can beat most casual players at an Elo of around 1600."
        },
        {
            "name": "A Very Simple Pong Game",
            "weight": 2,
            "tags": [
                "java",
                "swing",
                "networking",
                "game"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/a-very-simple-pong-game.git"
                }
            ],
            "content": "A simple pong game written in Java using Swing. The game supports multiplayer over a local network, and has a simple AI for single player mode."
        },
        {
            "name": "EmojiPad",
            "weight": 7,
            "tags": [
                "dotnet",
                "wpf",
                "windows"
            ],
            "image": "$root/assets/portfolio/emojipad.png",
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/emojipad.git"
                }
            ],
            "content": "EmojiPad is a highly configurable emoji sticker pad. Its sleek UI is simple to use, and handles thousands of emojis with ease."
        },
        {
            "name": "VirtualEdit",
            "weight": 8,
            "tags": [
                "java",
                "minecraft",
                "library",
                "algorithms"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/VirtualEdit.git"
                }
            ],
            "content": "VirtualEdit is an experimental library for Paper that allows developers to modify vast regions of the world (seen by the client) without causing lag. This is accomplished by using an internal 3d implicit segment tree and real-time packet manipulation. This library is used in MissileWarsX to hide entire regions of the world from the client."
        },
        {
            "name": "Neutrino",
            "weight": 8,
            "tags": [
                "dotnet",
                "cli",
                "algorithms",
                "library"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/Neutrino.git"
                },
                {
                    "name": "Install Package",
                    "icon": "fa-box",
                    "link": "https://www.nuget.org/packages/Neutrino.Cli"
                }
            ],
            "content": "Neutrino is a command line tool and library for performing fast full-text search. It uses an extended rolling hash algorithm to achieve O(n) time complexity while allowing advanced search features such as wildcards and file globbing. This is still a WIP project."
        },
        {
            "name": "JourneyRoute",
            "weight": 9,
            "tags": [
                "java",
                "minecraft",
                "algorithms"
            ],
            "image": "$root/assets/portfolio/journeyroute.png",
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/journeyroute.git"
                },
                {
                    "name": "Watch Demo",
                    "icon": "fa-video",
                    "link": "https://www.youtube.com/watch?v=d2jtADDBxpM"
                }
            ],
            "content": "JourneyRoute is a path-finding mod for Minecraft. With JourneyRoute, you will never get lost down a mineshaft! As you travel in a world, it will build a network of all the places you have been, and is able to find routes between locations. It uses the A* algorithm to efficiently search through its internal 3d graph of the world."
        },
        {
            "name": "EtfDotNet",
            "weight": 9,
            "tags": [
                "dotnet",
                "erlang-term-format",
                "library"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/EpicPix/EtfDotNet.git"
                }
            ],
            "content": "EtfDotNet is a high performance library for serializing and deserializing Erlang Term Format (ETF). It is able to deserialize most data in-place without having to copy it into new buffers."
        },
        {
            "name": "Offline Judge",
            "weight": 9,
            "image": "$root/assets/portfolio/offlinejudge.png",
            "tags": [
                "dotnet",
                "cli",
                "competitive-programming"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/offlinejudge.git"
                }
            ],
            "content": "Offline Judge is a command line tool for testing competitive programming solutions. It is able to run solutions against a reference solution, and compare the output. It runs solutions in parallel, and is able to terminate solutions that exceed the time or memory limit."
        },
        {
            "name": "Musii",
            "weight": 7,
            "tags": [
                "dotnet",
                "discord-bot",
                "self-hosted"
            ],
            "links": [
                {
                    "name": "Learn More",
                    "icon": "fa-plus",
                    "link": "https://github.com/encodeous/musii.git"
                }
            ],
            "content": "Musii is a self-hosted Discord bot that allows users to play music in Discord voice channels. It is able to play music from YouTube, SoundCloud, and Spotify (by searching for the song on YouTube). It also has a built-in queue system, and supports playlists, bass boost, sharing playlists, and more."
        },
        {
            "name": "Clockwork",
            "weight": 8,
            "tags": [
                "dotnet",
                "task-scheduling",
                "library"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/clockwork.git"
                },
                {
                    "name": "Install Package",
                    "icon": "fa-box",
                    "link": "https://www.nuget.org/packages/Encodeous.clockwork/"
                }
            ],
            "content": "Clockwork is a declarative & fluent task scheduling library for .NET. It allows you to schedule tasks to run at specific times, or at regular intervals. It also supports running tasks in parallel, and is built on top of the Task Parallel Library."
        },
        {
            "name": "Tetrix",
            "weight": 4,
            "tags": [
                "cpp",
                "arduino",
                "hardware"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/Tetrix.git"
                }
            ],
            "content": "Tetrix is a tiny implementation of Tetris on an Arduino microcontroller. It uses a 8x8 LED matrix to display the game, and implements all of the core components of Tetris."
        },
        {
            "name": "DirtyProxy",
            "weight": 4,
            "tags": [
                "dotnet",
                "scraping"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/dirtyproxy.git"
                }
            ],
            "content": "DirtyProxy is a quick and easy proxy scraper that scrapes proxies from a list of websites. It is able to scrape HTTP, HTTPS, and SOCKS proxies, and can asynchronously test them for connectivity."
        },
        {
            "name": "Horizon",
            "weight": 10,
            "tags": [
                "dotnet",
                "tunnel",
                "cli"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/horizon.git"
                }
            ],
            "content": "Horizon is a high performance TCP over WebSockets tunnel that allows services to be accessed behind a HTTP server. It is able to act as a proxy or reverse proxy, and supports high-throughput scenarios with low latency. Horizon was tested to have a maximum throughput of 5 Gbps on an i7 machine."
        },
        {
            "name": "RoboMatch",
            "weight": 9,
            "tags": [
                "cpp",
                "matching-game",
                "arduino"
            ],
            "image": "$root/assets/portfolio/robomatch.png",
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/robomatch.git"
                },
                {
                    "name": "Demo",
                    "icon": "fa-video",
                    "link": "https://www.youtube.com/watch?v=cjLqTAt5Vvc"
                },
                {
                    "name": "Play",
                    "icon": "fa-gamepad",
                    "link": "https://wokwi.com/projects/316891890985206336"
                }
            ],
            "content": "RoboMatch is an implementation of the classic Pair Matching Memory Game on an Arduino microcontroller. It uses a text-based LCD, and an intuitive interface to allow users to play the game."
        },
        {
            "name": "WStream",
            "weight": 10,
            "tags": [
                "dotnet",
                "websocket",
                "library"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/wstream.git"
                },
                {
                    "name": "Install Package",
                    "icon": "fa-box",
                    "link": "https://www.nuget.org/packages/wstream/"
                }
            ],
            "content": "High performance WebSocket stream wrapper for .NET. WStream can reach over 10+ Gbps throughput, and implements an asymmetrical encryption scheme. It currently has the following download count: <img alt=\\"Nuget\\" src=\\"https://img.shields.io/nuget/dt/wstream?style=flat&color=%23ffffff\\">"
        },
        {
            "name": "shShortener",
            "weight": 5,
            "tags": [
                "dotnet",
                "url-shortener",
                "blazor"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/shsh.git"
                }
            ],
            "content": "shShortener is a simple URL shortener written in Blazor. It uses a SQLite database to store the URLs, and is able to generate random and custom urls."
        },
        {
            "name": "Toyota Canada",
            "weight": 10,
            "tags": [
                "python",
                "machine-learning",
                "competition"
            ],
            "links": [
                {
                    "name": "Source Code",
                    "icon": "fa-code",
                    "link": "https://github.com/encodeous/tmmc-2023"
                }
            ],
            "content": "Our team won the Toyota Innovation Challenge in 2023. I lead the development of a machine learning model by fine-tuning the YOLOv8 model to detect industrial sticker applications on the Toyota manufacturing line. The model validates quality of application (alignment, position, coverage etc) in real-time, and is able to work on low-contrast situations (i.e black stickers on black paint.)"
        }
    ]
}`;

export function loadData(){
    let obj = JSON.parse(renderVariables(pf_data)).items
    obj.sort(function(x,y) { return y.weight - x.weight});
    console.log(obj);
    portfolio.set(obj);
}

export async function loadBlogs(){
    let value = await fetch(apiEndpoint + '/blogs');
    return JSON.parse(await value.json());
}

export async function loadBlog(blogId : string){
    let value = await fetch(apiEndpoint + '/blog/' + blogId);
    let obj = JSON.parse(await value.json());
    obj.rendered = renderVariables(obj.rendered);
    return obj;
}

export function renderVariables(str : string){
    str = str.replaceAll(/(?<!\\)(\$root)/g, apiEndpoint + "/asset");
    str = str.replaceAll(/(?<!\\)(\$blog)/g, "/blog");

    // remove the escape slash from escaped characters
    // i.e \$ -> $
    // but \\$ -> \$
    str = str.replaceAll(/(?<!\\)(\\\$)/g, "$");
    str = str.replaceAll(/\\\\$/g, "\\$");
    return str;
}