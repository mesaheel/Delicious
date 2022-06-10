
import Pages from "./pages/Pages";
import Catagory from "./components/Catagory";
import {BrowserRouter, Link} from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from "react-icons/gi";

function App() {
  return (
    <div className="App">
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Nav>
    <GiKnifeFork />
      <Logo to={"/"}>Delicious</Logo>
    </Nav>
    <Search />
    <Catagory />
      <Pages />
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link) `
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster Two', cursive;

`;

const Nav = styled.div `
padding: 2rem 0rem;
display: flex;
justify-content: flex-start;
align-item: center;

svg{
  font-size: 2rem;
};

`;

export default App;
