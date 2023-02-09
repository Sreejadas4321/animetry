import React from 'react'
import Card from '../Cards/Card'
import "./Anime.css"


const animeList=[
  {
      id: 1,
      title: "Attack On Titan",
      cover:
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/a9d4c1493f80703fe86dd83fb3b37623.jpeg",
      plot:
         "The story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his",
  },
  {
      id: 2,
      title: "Death Note",
      cover:
        "https://occ-0-2186-3211.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABboqDwV98d-QpA6biauPIcgNeH_c439AXzsln9B1k2Ol9F36YokyOE42ORtSKEx-CiqNsiC-6Dhm4-mFCK1q9OZRJFa9rG_CUvHe.jpg?r=685",
      plot:
         " In a world where the feeling of being lonely amongst a crowd is prevalent, a guy named Light Yagami stumbles upon an odd black book, the 'Death",
  },
  {
      id: 3,
      title: "One Punch Man",
      cover:
        "https://static.bandainamcoent.eu/high/one-punch-man/one-punch-man-a-hero-nobody-knows/00-page-setup/opm_game-thumbnail.jpg",
      plot:
         "Saitama, the protagonist, is an exceptionally powerful hero who easily defeats the monsters or other villains with a single punch.",
  },
  {
      id: 4,
      title: "Naruto",
      cover:
        "https://preview.redd.it/4xy1dsstjiu61.jpg?width=950&format=pjpg&auto=webp&s=bb3fb9028354b634aff97056d28ca788f70794be",
      plot:
         "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. ",
  },
  {
      id: 5,
      title: "Hunter x Hunter",
      cover:
        "https://dw9to29mmj727.cloudfront.net/promo/2016/6231-SeriesHeaders_HxH_2000x800.jpg",
      plot:
         "The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed",
  },
  {
      id: 6,
      title:"Tokyo Ghoul",
      cover:
        "https://occ-0-768-999.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeMbxAu-JHleF7dKV1mLB50kVxvcVMNsz13eJu45cza3JxC7V9uY8aaM2lBc9iK8iyszfIh-ZXjBWaPvMpravVoVWHpQwCzFuKlC.jpg?r=0cb",
      plot:
         "A college student is attacked by a ghoul, a being that feeds on human flesh. He later receives an organ transplant from the ghoul, becoming part monster himself.",
  },
  {
      id: 7,
      title: "Silent Voice",
      cover:
        "https://jpbound.com/wp-content/uploads/2021/01/AAAABdIC3Ua_kD0ITbIheGPJmEcuSFEj3mM280wlpYwAdBTkXiY45j0NQzisIDcb1PmB4ssH5D4yPFdXkfH10aWQ494roGuU.jpg",
      plot:
         "When a grade school student with impaired hearing is bullied mercilessly, she transfers to another school. Years later, one of her former tormentors sets out to make amends.",
  },
  {
      id: 8,
      title: "Jujutsu Kaisen",
      cover:
        "https://assets.telegraphindia.com/telegraph/2022/Oct/1665076897_new-project-6.jpg",
      plot:
         "Yuji Itadori, a kind-hearted teenager, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use.",
  },
  {
      id: 9,
      title: "One piece",
      cover:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/07/Header-10-Anime-to-Watch-If-You-Love-One-Piece.jpg",
      plot:
         "The series focuses on Monkey D. Luffy, a young man made of rubber, who, inspired by his childhood idol, the powerful pirate Red-Haired Shanks, sets off on a journey from the East Blue.",
  },
  {
      id: 10,
      title: "Your Lie in April",
      cover:
        "https://nefariousreviews.files.wordpress.com/2017/03/your-lie-in-april-featured.jpg",
      plot:
         "A piano prodigy is unable to play music after his mother dies, until he meets a violin player.",
  },
  {
      id: 11,
      title: "Black Clover",
      cover:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Black-Clover-Featured.jpg",
      plot:
         "The series focuses on Asta, a young orphan who is left to be raised in an orphanage alongside his fellow orphan, Yuno.",
  },
  {
      id: 12,
      title: "Fullmetal Alchemist",
      cover:
        "https://nefariousreviews.files.wordpress.com/2015/12/fullmetal-alchemist-brotherhood-featured.jpg?w=640",
      plot:
         "Set in the early 20th century, in a fictional universe in which alchemy is a widely practiced science, the series follows the journey of two alchemist brothers.",
  },
]

export default function Anime() {
  return (
    <section className='anime' id='anime'>
     <Card list={animeList} name="Popular anime"/>
 </section>
 
  )
}
