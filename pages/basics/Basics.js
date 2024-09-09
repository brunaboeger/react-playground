import { useState } from "react";

let isLoggedIn = false;

const image = {
  url: "https://www.animalfriends.co.uk/siteassets/media/images/article-images/cat-articles/39_afi_article1_kitten-timeline--first-year-.png",
  name: "gatinho",
  size: "auto",
};

function MyButton({ count, onClick, message }) {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // return <button onClick={handleClick}>Você clicou {count} vezes</button>;
  return (
    <button onClick={onClick}>
      {message}
      {count}
    </button>
  );
}

function ShoppingList() {
  const products = [
    { title: "Repolho", isFruit: false, id: 1 },
    { title: "Alho", isFruit: false, id: 1 },
    { title: "Maçã", isFruit: true, id: 1 },
  ];

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "gray" }}
    >
      {product.title}
    </li>
  ));

  return listItems;
}

function AdminPanel() {
  const message = "Under construction...";
  return (
    <div>
      <h1 className="title">{message}</h1>
      <img
        className="image"
        src={image.url}
        alt={"Foto de " + image.name}
        style={{
          width: image.size,
        }}
      />
      <ShoppingList />
    </div>
  );
}

function LoginForm() {
  const emailInput = <input type="text" />;
  const passwordInput = <input type="password" />;
  const title = <h1>Você precisa entrar</h1>;

  const form = {
    title: title,
    email: emailInput,
    password: passwordInput,
  };

  const [count, setCount] = useState(0);
  const message = "Você clicou...";

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {form.title}
      {form.email}
      {form.password}
      <MyButton count={count} onClick={handleClick} message={message} />
      <MyButton count={count} onClick={handleClick} message={message} />
      <MyButton count={count} onClick={handleClick} message={message} />
    </div>
  );
}

export default function Basics() {
  let content;

  image.url = "";

  if (image.url.length > 0) {
    isLoggedIn = true;
  }

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return content;
}
