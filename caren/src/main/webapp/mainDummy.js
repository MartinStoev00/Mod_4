import {header, headerStyle} from "./scripts/header.js";
import main from "./scripts/mainPage.js";
import sidebar from "./scripts/sidebar.js";

let items = [
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Monica",
        description: "None",
        img: "2.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Wishal",
        description: "None",
        img: "3.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Mohammad",
        description: "None",
        img: "4.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Omar",
        description: "None",
        img: "5.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Hamza",
        description: "None",
        img: "6.jpg" 
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    },
    {
        name: "Joe",
        description: "None",
        img: "1.jpg"
    }
];
let notifications = [
    {
        name: "Joenvkgkjhgkjhggjfgj",
        deed: " has commented on your post",
        img: "1.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Grozen",
        deed: " has commented on your post",
        img: "2.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "James",
        deed: " has commented on your post",
        img: "3.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Jar",
        deed: " has commented on your post",
        img: "4.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Justice",
        deed: " has commented on your post",
        img: "5.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "John",
        deed: " has commented on your post",
        img: "2.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "James",
        deed: " has commented on your post",
        img: "3.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Jar",
        deed: " has commented on your post",
        img: "4.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Justice",
        deed: " has commented on your post",
        img: "5.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "John",
        deed: " has commented on your post",
        img: "2.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "James",
        deed: " has commented on your post",
        img: "3.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Jar",
        deed: " has commented on your post",
        img: "4.jpg",
        link: "somewhere",
        date: "Yesterday"
    },
    {
        name: "Justice",
        deed: " has commented on your post",
        img: "5.jpg",
        link: "somewhere",
        date: "Yesterday"
    }
];
let posts = [
    {
        rid: 1234,
        name: "John Doe1",
        date: "2010-12-11 15:29:37",
        img: "1",
        title: "text",
        text: "Jar Jar"
    },{
        rid: 1235,
        name: "CJohn Doe1",
        date: "2009-12-11 15:28:37",
        img: "1",
        title: "height",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollajks dhfaksjdhfgkjsdhfgakj sdhfgjsdfgak ddddddddddd dddddddddddd ddddddddddddd ddddddddddd dddddddddddd dddddddddddd dddddddddddd ddddddddd sjdhfgksdjg sjdhgksjdf gksdjfaghskdfjitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
    },{
        rid: 1236,
        name: "DJohn Doe1",
        date: "2011-12-11 15:29:37",
        img: "1",
        title: "weight",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad."
    }
];
let comments = [
    {
        cid: 50,
        rid: 1234,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
        date_added:"2011-12-11",
        parentid: 0,
        visibility:"private"
    },
    {
        cid: 1,
        rid: 1234,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue",
        date_added:"2011-11-11",
        parentid: 0,
        visibility:"private"
    },
    {
        cid: 2,
        rid: 1235,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
        date_added:"2011-10-11",
        parentid: 0,
        visibility:"private"
    },
    {
        cid: 51,
        rid: 1234,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
        date_added:"2009-11-14",
        parentid: 1,
        visibility:"private"
    },
    {
        cid: 3,
        rid: 1234,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
        date_added:"2009-11-11",
        parentid: 1,
        visibility:"private"
    },
    {
        cid: 4,
        rid: 1235,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
        date_added:"2008-10-11",
        parentid: 2,
        visibility:"private"
    },
    {
        cid: 5,
        rid: 1236,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
        date_added:"2011-11-12",
        parentid: 6,
        visibility:"private"
    },
    {
        cid: 6,
        rid: 1236,
        name: "Joe Marunga1",
        pid: 1,
        text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
        date_added:"2011-9-11",
        parentid: 0,
        visibility:"private"
    },
]

function init() {
    if(document.getElementsByClassName("mainPosts").length > 0) {   
        sidebar(items, posts, comments);
    }
    if(document.getElementsByClassName("main").length > 0) {   
        main(items);
    }
    if(document.getElementsByClassName("header").length > 0) {   
        header(items, notifications);
        headerStyle();
    }
}

function stylize() {
    if(document.getElementsByClassName("header").length > 0) {   
        headerStyle();
    }
}

window.addEventListener('resize', stylize);
window.onload = init;