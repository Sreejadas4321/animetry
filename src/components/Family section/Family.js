import React from 'react'
import Card from '../Cards/Card'
import "./Family.css"

const familyList=[
   
    {
        id: 1,
        title: "Sk8",
        cover:
          "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/reki-sk8.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
        plot:
           "High school sophomore and hardcore skater Reki introduces transfer student Langa to a secret, no-holds-barred race down an abandoned mine.",
    },
    {
        id: 2,
        title: "Kuroko's basketball",
        cover:
          "https://www.whats-on-netflix.com/wp-content/uploads/2021/08/kurokos-basketball-season-3-is-coming-to-netflix-in-september-2021.png",
        plot:
           "Taiga Kagami and Tetsuya Kuroko aim to take the Seirin High School basketball team to the very top; Kagami is a star player, but Kuroko has a secret skill.",
    },
    {
        id: 3,
        title: "Toilet-Bound-Hanako-Kun",
        cover:
          "https://cdn.thetealmango.com/wp-content/uploads/2021/11/toilet-bound-hanako-kun-season-2.jpg",
        plot:
           "A high school student who loves the supernatural helps a ghost resolve troubles that arise between the other students and the inhabitants of the spirit world.",
    },
    {
        id: 4,
        title: "Komi Can't Communicate",
        cover:
          "https://occ-0-420-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdFpoAUTAK32U3kaNnJq9tW0XnSBrIFdmppaDECnI7kz1_ffEG2UKxgShsPNWr4qPaXGSqw4GgIROiQ4Lwyok2GT_6b3aFg2-wVM.jpg?r=9a7",
        plot:
           "Komi Can't Communicate is a Japanese manga series written and illustrated by Tomohito Oda. It has been serialized in Shogakukan's shōnen manga magazine Weekly Shōnen Sunday since May 2016, with its chapters collected in twenty-seven tankōbon volumes as of October 2022",
    },
    {
        id: 5,
        title: "Fairy Tail",
        cover:
          "https://wallpaperaccess.com/full/31265.jpg",
        plot:
           "Fairy Tail is a Japanese manga series written and illustrated by Hiro Mashima. It was serialized in Kodansha's Weekly Shōnen Magazine from August 2006 to July 2017, with the individual chapters collected and published into 63 tankōbon volumes.",
    },
    {
        id: 6,
        title: "Pokemon",
        cover:
          "https://i.guim.co.uk/img/media/66e444bff77d9c566e53c8da88591e4297df0896/120_0_1800_1080/master/1800.png?width=620&quality=85&dpr=1&s=none",
        plot:
           "Pokémon is a Japanese media franchise managed by The Pokémon Company, founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1996, and is centered around fictional creatures called Pokémon.",
    },
    
    {
        id: 7,
        title: "My Hero Academia",
        cover:
          "https://cdn.vox-cdn.com/thumbor/7Sc-uq1QaiXA2JDYoiLWfmOJ0eQ=/0x0:1024x768/1220x813/filters:focal(295x17:457x179):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55092733/Boku_no_Hero_Academia_Heroes_Anime_Wallpaper_HD.0.jpg",
        plot:
           "My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 2014, with its chapters additionally collected into 36 tankōbon volumes as of October 2022.",
    },
    {
        id: 8,
        title: "Doraemon",
        cover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXHPIIUlQ1Qt77F94K2d0nVt5wdXdQZEk3A&usqp=CAU",
        plot:
           "Doraemon is a fictional character in the Japanese manga and animated series of the same name created by Fujiko F. Fujio, the pen name of writing team Hiroshi Fujimoto and Motoo Abiko. Doraemon is a male robotic earless cat that travels back in time from the 22nd century to aid a preteen boy named Nobita.",
    },
    {
        id: 9,
        title: "Barakamon",
        cover:
          "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1240/MTc0Mzc0ODAwMzM5MjQ4Nzc0/animes-like-barakamon.webp",
        plot:
           "Barakamon is a Japanese manga series written and illustrated by Satsuki Yoshino. It started serialization in Square Enix's Gangan Online February 2009 issue. ",
    },
    {
        id: 10,
        title: "Haikyuu",
        cover:
          "https://media.comicbook.com/2020/08/haikyuu-anime-1233714.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart",
        plot:
           "Haikyu!! (ハイキュー!!, Haikyū!!, from the kanji 排球 volleyball is a Japanese manga series written and illustrated by Haruichi Furudate. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2012 to July 2020, with its chapters collected in 45 tankōbon volumes. ",
    },
    {
        id: 11,
        title: "Wolf Children",
        cover:
          "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f1bb5da76e963a3b29a58bf833f5fba7.jpeg",
        plot:
           "Hana marries a wolf man and raises their two children alone after he dies. They move to the countryside and the children have adventures in the woods and at school.",
    },
    {
        id: 12,
        title: "The Boy and the Beast",
        cover:
          "https://images5.alphacoders.com/837/837752.jpg",
        plot:
           "Kyuta slips into an alternate universe where he is raised by the bear-man, Kumatetsu. Kyuta is eventually thrust into an adventure that spans both worlds.",
    }
    
]

export default function Family() {
  return (
    <section className='family' id='family'>
         <Card list={familyList} name="Family"/>
    </section>
  )
}
