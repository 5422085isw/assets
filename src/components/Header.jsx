import Navigate from "./Navigate";

export default function Header(){
  return(
    <header>
        <h1>Birdwatching</h1>
        <img src=".\public\dove.png" alt="a simple dove logo"></img>
        <Navigate />
    </header>
  );
}