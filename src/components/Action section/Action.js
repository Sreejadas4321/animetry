import React from 'react'
import Card from '../Cards/Card'
import "./Action.css"


const actionList = [
     {
    
    id: 1,
    title: "My Hero Academia",
    cover :
    
    "https://www.liveakhbar.in/wp-content/uploads/2022/11/2-5.jpeg",
    
    plot: "In a world where those with powers are known as Quirks, Izuku Midoriya has aspirations to one day become a hero but there's a catch -- he isn't a Quirk.",
    
    },
    
    {
    
    id: 2,
    title : "Castlevania",
    cover:
    
    "https://wallpaperaccess.com/full/1308225.png",
    
    plot: "Inspired by the popular video game series, this anime series is a dark medieval fantasy. It follows the last surviving member of the disgraced Belmont clan, Trevor Belmont, trying to save Eastern Europe from extinction at the hands of Vlad Dracula Tepes.",
    
    },
    
    {
    
    id: 3,
    title: "Overlord",
    cover:
    
    "https://droidjournal.com/wp-content/uploads/2020/04/maxresdefault-4.jpg",
    
    plot: "An online role-playing game takes on a reality of its own after its servers permanently shut down, trapping the only remaining logged-in player as his fearsome lich character who struggles to maintain the fragile balance between the world's races.",
    
    },
    
    {
    id: 4,
    title: "Baki Hanma",
    cover:
    
    "https://wallpaperforu.com/wp-content/uploads/2022/03/Baki-Anime-Hd-Wallpapers14.jpg",
    
    plot: "Baki Hanma trains to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world; five of the world's most violent and brutal death row inmates gather to face Baki.",
    
    },
    
    {
    id: 5,
    title: "Dororo",
    cover: 
    
    "https://static.hidive.com/news/2022/10/HIDIVE-news-dororo-streaming-836x470_2.png",
    
    plot: "A mysterious warrior with prosthetic limbs and a young orphan thief travel across Japan fighting demons who threaten humanity.",
    
    },
    
    {
    id: 6,
    title: "Vinland Saga",
    cover:
    
    "https://flxt.tmsimg.com/assets/p17127060_b_h10_aa.jpg",
    
    plot: "Raised by the Vikings who murdered his family after they raided his land, Thorfinn becomes a terrifying warrior, forever seeking to kill the band's leader, Askeladd, and avenge his father.",
    
    },
    
    {
    id: 7,
    title: "Tokyo Revengers",
    cover:
    
    "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7923a0407dbdba324c56acec9f096c13.jpe",
    
    plot: "Takemichi Hanagaki learns that his former high school girlfriend, Hinaata, has died; an event takes him back twelve years, and here he does everything to prevent the young woman from being murdered.",
    
    },
    
    {
    id: 8,
    title: "Megalo Box",
    cover: 
    
    "https://images4.alphacoders.com/936/936236.png",
    
    plot: "Set in a city where the wealthy are licensed citizens and those on the outskirts are unlicensed citizens living in poverty, the sport of megalo boxing has risen. ",
    
    },
    
    {
    id: 9,
    title: "Mushoku Tensei Jobless Reincarnation",
    cover:
    
    "https://i.ytimg.com/vi/oei1K_l5Lx4/maxresdefault.jpg",
    
    plot: "Reincarnated into a magical world full of adventure, a formerly aimless and unemployed man decides to live his new life to the fullest.",
    
    },
    
    {
    id: 10,
    title: "Fairy Tail",
    cover: 
    
    "https://freegametips.com/wp-content/uploads/2021/02/1613553026_Fairy-Tail-in-what-order-to-watch-the-entire-series-1200x900.jpg",
    
    plot: "Lucy, a celestial wizard, meets and befriends Natsu, a dragon slayer wizard. They, along with others from the Fairy Tail guild, embark on various paid missions to fight crime and wrongdoings.",
    
    },
    
    {
    id: 11, 
    title: "Made in abyss",
    cover:"https://1.bp.blogspot.com/-_ADDXzCuiOI/YTrOAGudu5I/AAAAAAAAsXQ/hIifrlG6SBE276owhfUxPrg8cstDQf76gCLcBGAsYHQ/s0/Episodes-Made-in-Abyss-Filler-List-Chronological-Order.jpg",
    plot: "An orphaned girl named Riko lives in the Belchero Orphanage in the town of Orth. The town surrounds a strange, giant hole descending deep into the earth, which is known as the Abyss.",
    
    },
    
]


export default function Action() {
  return (
    <section className='action' id='action'>
     <Card list={actionList} name="Action Anime"/>
    </section>
  )
}
