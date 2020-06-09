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
        name: "John Doe1",
        date: "2010-12-11 15:29:37",
        img: "1.jpg",
        title: "text",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
        comments: [
            {
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga2",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga3",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga4",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga5",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga6",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            }
        ]
    },{
        name: "CJohn Doe1",
        date: "2009-12-11 15:28:37",
        img: "1.jpg",
        title: "height",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
        comments: [
            {
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga2",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga3",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga4",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga5",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga6",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            }
        ]
    },{
        name: "DJohn Doe1",
        date: "2011-12-11 15:29:37",
        img: "1.jpg",
        title: "weight",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
        comments: [
            {
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga2",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga3",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga4",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga5",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga6",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            }
        ]
    },{
        name: "DJohn Doe1",
        date: "2010-12-12 15:27:37",
        img: "1.jpg",
        title: "blood_pressure",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
        comments: [
            {
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga2",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga3",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga4",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga5",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga6",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            }
        ]
    },{
        name: "EJohn Doe1",
        date: "2010-12-12 15:26:37",
        img: "1.jpg",
        title: "other",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
        comments: [
            {
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga2",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga3",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga4",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga5",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga6",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            }
        ]
    },{
        name: "EJohn Doe1",
        date: "2008-12-11 15:29:37",
        img: "1.jpg",
        title: "height",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, sa sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
        comments: [
            {
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ue? Quis dolor earum ut, nam  quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga1",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga2",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga3",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga4",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga5",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga6",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            }
        ]
    }, {
        name: "BJohn Doe2",
        date: "2011-11-11 13:29:37",
        title: "other",
        img: "1.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus of    ficiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt repellendus officiis repudiandae sed, tempora nesciunt, mollitia animi, saepe quaerat iure doloremque debitis ad. Illum iusto officiis hic voluptate earum, ad.",
        comments: [
            {
                name: "Joe Marunga",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },{
                name: "Joe Marunga",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            },
            {
                name: "Joe Marunga",
                img: "1.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, reprehenderit, cumque? Quis dolor earum ut, nam quo dignissimos tempora porro esse voluptates, reprehenderit repudiandae sed incidunt doloribus hic ab, quas.",
                date:"2011-11-11"
            }
        ]
    }
];

function init() {
    if(document.getElementsByClassName("mainPosts").length > 0) {   
        sidebar(items, posts);
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
