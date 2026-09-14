import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.webp";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.webp";
import image7 from "./assets/image7.jpg";
import image8 from "./assets/image8.jpg";
import image9 from "./assets/image9.jpg";
import image10 from "./assets/image10.jpg";
const station=[
    {
        id:1,
        name:"Red Fm",
        category:"Hindi",
        city:"Delhi",
        img: image1,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
    {
        id:2,
        name:"Vividh Bharti",
        category:"Hindi",
        city:"Mumbai",
        img: image2,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
    {
        id:3,
        name:"90s kishor kumar",
        category:"Hindi",
        city:"Mumbai",
        img: image3,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
    {
        id:4,
        name:"Goldy Evergreen ",
        category:"Hindi",
        city:"Gujarat",
        img: image4,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
     {
        id:5,
        name:"Hits of Mohammad rafi ",
        category:"Hindi",
        city:"Mumbai",
        img: image5,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
     {
        id:6,
        name:"Hits of lata mangeshkar ",
        category:"Hindi",
        city:"Delhi",
        img: image6,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
     {
        id:7,
        name:"ABP Live",
        category:"News",
        city:"Mumbai",
        img: image7,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
     {
        id:8,
        name:" Akashvani ",
        category:"News",
        city:"Delhi",
        img: image8,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
     {
        id:9,
        name:"Bhakti Rang ",
        category:"Bhakti",
        city:"Mumbai",
        img: image9,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
   
   
     {
        id:10,
        name:" Bhakti Sangeet",
        category:"Bhakti",
        city:"India",
        img: image10,
        URL:"https://stream-283.surfernetwork.com/n2fd0edh9k8uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJuMmZkMGVkaDlrOHV2IiwiaG9zdCI6InN0cmVhbS0yODMuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJsSFN2TzloV1FNLUhyZEluOUZUdkRBIiwiaWF0IjoxNzg3NTkyNzEzLCJleHAiOjE3ODc1OTI3NzN9.SK9iU6YI_R7F3v97kaRRhS8qd3eE-0uSrfinbfC-mUo"

    },
    
   
    
]
export default station