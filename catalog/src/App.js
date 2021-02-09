import React from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


// - Lorsqu'on arrive sur la page d'accueil, une liste de tous les titres de film
// - Chaque titre est un lien qui nous emmène sur la page du film (route dynamique) le paramètre de l'url est l'id du film
// - Quand on arrive sur la page d'un film, on peut y trouver le titre, le réalisateur, les acteurs, l'affiche et la description
// - Vous ne devez utiliser que deux routes dans votre router : `/` et une route dynamique de votre choix
// - Le catalogue sera le contenu du fichier JSON ci-dessous, stockez-le dans un endroit stratégique 😉

const movies = [
  {
          id : 1,
      title: "A Wrinkle in Time",
      director: "Ava DuVernay",
      stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
  },
  {
          id : 2,
      title: "The Strangers: Prey at Night",
      director: "Johannes Roberts",
      stars: ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
  },
  {
          id : 3,
      title: "The Hurricane Heist",
      director: "Rob Cohen",
      stars: ["Toby Kebbell", "Maggie Grace", "Ryan Kwanten"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
  },
  {
          id : 4,
      title: "Gringo",
      director: "Nash Edgerton",
      stars: ["Joel Edgerton", "Charlize Theron", "David Oyelowo"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "GRINGO, a dark comedy mixed with white-knuckle action and dramatic intrigue, explores the battle of survival for businessman Harold Soyinka (David Oyelowo) when he finds himself crossing the line from law-abiding citizen to wanted criminal.",
  },
  {
          id : 5,
      title: "Thoroughbreds",
      director: "Cory Finley",
      stars: ["Anya Taylor-Joy", "Olivia Cooke", "Anton Yelchin"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.",
  },
  {
          id : 6,
      title: "The Leisure Seeker",
      director: "Paolo Virzì",
      stars: ["Helen Mirren", "Donald Sutherland", "Janel Moloney"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.",
  },
  {
          id : 7,
      title: "Black Panther",
      director: "Ryan Coogler",
      stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
  },
  {
          id : 8,
      title: "Red Sparrow",
      director: "Francis Lawrence",
      stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
      image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg',
      description:
      "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
  }
  ];


class App extends React.Component {
  


  render() {
    return (
      <BrowserRouter>
        <div>
            <nav><h1 className="header">Bienvenue sur notre Page</h1></nav>
        </div>

        <div >
          <ul className="d-flex flex-row">
            {movies.map(film => (
              <li className="list-unstyled" key={film.id}> 
                <p className="text-center"><Link to={`/${movies.id}`}>{film.title}</Link></p>
              </li>
            ))}
          </ul>
        </div>
        

        <Switch>
          <Route exact path="/" component ={App}/>
          {/* <Route path="/film:id" component ={App}/> */}
        </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
