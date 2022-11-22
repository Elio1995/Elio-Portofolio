import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export const info = {
    firstName: "Elio",
    lastName: "Mehmeti",
    initials: "em",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Albania'
        },
        {
            emoji: "💼",
            text: "Full Stack Developer at Nurselo GmbH"
        },
        {
            emoji: "📧",
            text: "mehmetielio95@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/eliomehmeti/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Elio1995",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/elio-mehmeti-70a883217/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
    ],
    bio: "Hello! I'm Elio. I'm a full stack developer at Nurselo GmbH. I studied at an immersive full-time coding academy, Boolean UK. I love climbing mountains, and I find coding very fun and that's what I want to do in the future. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'typescript', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'materialui', 'tailwindcss', 'firebase', 'zustand', 'styledcomponent'],
            exposedTo: ['nodejs', 'SQL', 'jest']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'football',
            emoji: '⚽️'
        },
        {
            label: 'gym',
            emoji: '💪'
        },
        {
            label: 'cooking',
            emoji: '🧑‍🍳'
        }
    ],
    portfolio: [ 
        {
            title: "Calculator App",
            live: "https://earnest-dusk-c9f2a9.netlify.app/",
            source: "https://github.com/Elio1995/static-job-listings-master", 
            image: mock1
        },
        {
            title: "Rock Paper Scissor Game",
            live: "https://rock-paper-scissors-game-drab.vercel.app/",
            source: "https://github.com/Elio1995/rock-paper-scissors-game",
            image: mock2
        },
        {
            title: "Expenses Chart",
            live: "https://paytonpierce.dev",
            source: "https://expenses-chart-lovat.vercel.app/",
            image: mock3
        },
        {
            title: "Todo App",
            live: "https://todo-app-kappa-tawny.vercel.app/",
            source: "https://github.com/Elio1995/todo-app",
            image: mock4
        },
        {
            title: "Portfolio",
            live: "https://github.com/Elio1995",
            source: "https://github.com/Elio1995",
            image: mock5
        },
    ]
}