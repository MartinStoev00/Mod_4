import {header, headerStyle} from "./scripts/header.js";
import main from "./scripts/mainPage.js";
import mainPosts from "./scripts/mainPosts.js";
import sidebar from "./scripts/sidebar.js";

let incoming = {
    items:[
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
    }],
    notifications: [
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
    ]
};
let postsJson = {
    posts: [
          {
            name: "John Doe1",
            date: "2010-12-11 15:29:37",
            img: "1.jpg",
            title: "CA I am Grozen an I know it",
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
            img: "9.jpg",
            title: "DI am Grozen an I know it",
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
            title: "I am Grozen an I know it",
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
            title: "I am Grozen an I know it",
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
            title: "I am Grozen an I know it",
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
            title: "DI am Grozen an I know it",
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
            title: "BI am not Grozen an I know it",
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
    ]
}

function init() {
    let posts;
    let associations;

    getrecords("http://localhost:8080/caren/rest/getrecords").then((data) => {
        posts = JSON.parse(data);
        if(document.getElementsByClassName("mainPosts").length > 0) {   
            mainPosts(posts);
        }
    }).catch((err) => {
        console.log(err);
    });

    getrecords("http://localhost:8080/caren/rest/getassociations").then((data) => {
        associations = JSON.parse(data);
        if(document.getElementsByClassName("main").length > 0) {   
            main(associations);
        }
        if(document.getElementsByClassName("sidebar").length > 0) {   
            sidebar(associations);
        }
        if(document.getElementsByClassName("header").length > 0) {   
            header(associations);
            headerStyle();
        }
    }).catch((err) => {
        console.log(err);
    });
}

function stylize() {
    if(document.getElementsByClassName("header").length > 0) {   
        headerStyle();
    }
}

window.addEventListener('resize', stylize);
window.onload = init;

function getrecords(location) {
    return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", location, true); 
    xhr.onload = function(){
        if(this.status >= 200 && this.status < 300){
            resolve(xhr.response);
            console.log(xhr.responseText);
        } else {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
    };
    xhr.onerror = function() {
        reject({
            status: this.status,
            statusText: xhr.statusText
        });
    };
    xhr.send();
  });
}