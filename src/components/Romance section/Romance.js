import React from 'react'
import Card from '../Cards/Card'
import "./Romance.css"

const romanceList=[
  {
      id: 1,
      title: "Horimiya",
      cover:
        "https://otakukart.com/wp-content/uploads/2022/01/Horimiya.jpg",
      plot:
         "Two very different people - an academically successful schoolgirl and a quiet loser schoolboy - meet and develop a friendship.",
  },
  {
      id: 2,
      title: "Wotakoi",
      cover:
        "https://www.theouterhaven.net/wp-content/uploads/2018/06/Wotakoi.jpg",
      plot:
         "The main characters are Narumi, an office working woman who hides her fujoshi lifestyle, and Hirotaka, a handsome and capable company man who is a game otaku.",
  },
  {
      id: 3,
      title: "Kokoro Connect",
      cover:
        "https://elbauldelasopiniones.files.wordpress.com/2014/02/001.jpg",
      plot:
         "Five school friends experience strange supernatural phenomena that put their relationships to test. ",
  },
  {
      id: 4,
      title: "Bunny Girl Senpai",
      cover:
        "https://www.inspiredtraveler.ca/wp-content/uploads/2021/07/Rascal-Does-Not-Dream-Of-Bunny-Girl-Senpai-1.jpg",
      plot:
         "The bunny girl's real identity is Mai Sakurajima, a teenage celebrity who is currently an inactive high school senior. For some reason, her charming figure does not reflect in the eyes of others.",
  },
  {
      id: 5,
      title: "My Dress-Up Darling",
      cover:
        "https://twinfinite.net/wp-content/uploads/2022/08/my-dress-up-darling.jpg",
      plot:
         "High schooler Wakana Gojou cares about one thing: making Hina dolls. With nobody to share his obsession, he has trouble finding friends or even holding conversation.",
  },
  {
      id: 6,
      title: "Love Is War",
      cover:
        "https://nefariousreviews.files.wordpress.com/2020/09/kaguya-sama-love-is-war-season-2-featured.jpg",
      plot:
         "Two geniuses develop over the top and clever schemes to try and get the other to confess their love first, because to them, love is war, and the first to confess their feelings loses.",
  },
  {
      id: 7,
      title: "Clanned",
      cover:
        "https://images.squarespace-cdn.com/content/v1/5ccabcf60b77bdbb3acaf70a/1586315068359-384MC1IZAM7IPJ44EYKL/4ab53351c8038aa783411d2de2f262b0.jpg",
      plot:
         "Clannad is primarily set in a high school located in a small Japanese city. Clannad follows the life of Tomoya Okazaki, a third-year student who does not take his studies seriously",
  },
  {
      id: 8,
      title: "Fruits Basket",
      cover:
        "https://nefariousreviews.files.wordpress.com/2020/05/fruits-basket-featured.jpg",
      plot:
         "When high school student Tohru Honda's mother dies in a car accident, Tohru decides to live with her grandfather. Renovations on the house and an unsupportive, unkind family member cause her to move out of her grandfather's house temporarily.",
  },
  {
      id: 9,
      title: "Love Chunibyo & Other Delusions",
      cover:
        "https://www.gojinshi.com/wp-content/uploads/2019/08/Chuunibyou-demo-Koi-ga-Shitai-Love-Chunibyo-Other-Delusions-Watch-Order-Guide.jpg",
      plot:
         "Yūta Togashi is a boy who, during junior high school, suffered from chūnibyō, believing that he possessed supernatural powers and calling himself the Dark Flame Master, therefore alienating himself from his classmates.",
  },
  {
      id: 10,
      title: "Rent A Girlfriend",
      cover:
        "https://mangathrill.com/wp-content/uploads/2020/11/pjimage-69.jpg",
      plot:
         "Plot. Kazuya Kinoshita is dumped by his girlfriend Mami Nanami after dating for a month. He decides to use an online dating app to rent a girlfriend named Chizuru Mizuhara, a beautiful girl.",
  },
  {
      id: 11,
      title: "Fairy Tail",
      cover:
        "https://wallpaperaccess.com/full/31265.jpg",
      plot:
         "Fairy Tail is a Japanese manga series written and illustrated by Hiro Mashima. It was serialized in Kodansha's Weekly Shōnen Magazine from August 2006 to July 2017, with the individual chapters collected and published into 63 tankōbon volumes.",
  },
  
  
]

export default function Romance() {
  return (
    <section className='romance' id='romance'>
      <Card list={romanceList} name="Romance"/>
    </section>
  )
}
