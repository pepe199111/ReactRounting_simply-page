import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text: "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus voluptates beatae aperiam veniam harum vitae magni id ad sapiente. Est numquam inventore dolorum obcaecati possimus asperiores vel ipsum totam!",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Ania Nowak",
    text: "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus voluptates beatae aperiam veniam harum vitae magni id ad sapiente. Est numquam inventore dolorum obcaecati possimus asperiores vel ipsum totam!",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Michal Nowak",
    text: "333Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus voluptates beatae aperiam veniam harum vitae magni id ad sapiente. Est numquam inventore dolorum obcaecati possimus asperiores vel ipsum totam!",
  }
]

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <div className="home">
      {artList}
    </div>
  );
}

export default HomePage;