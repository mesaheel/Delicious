import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom";

function Veggie() {
    const [veggie, setVeggie] = useState([]);

useEffect(() => {
  getVeggie();
}, []);

const getVeggie = async () => {

  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
  const data = await api.json();
  setVeggie(data.recipes);
  console.log(data.recipes);

};  

    return (
        <div>
             <Wrapper>
                  <h3>Our Vegetarian Picks</h3>
                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem',
                    }}
                    >
                      {veggie.map((recipe) => {
                          return (
                            <SplideSlide key={recipe.id}>
                                <Crad>
                                <Link to={"./recipe/"+ recipe.id}> 
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                               <Gradient />
                               </Link>
                                </Crad>
                            </SplideSlide>
                                );
                                })}
                    </Splide>
              </Wrapper>
        </div>
    );
}


const Wrapper = styled.div`
margin: 1rem 0rem;

`;

const Crad = styled.div`
min-height: 20rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 70%;
    object-fit: cover;

}
p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%,0%);
    color: white;
    widht: 100%;
    height: 40%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-item: center;
}

`;


const Gradient = styled.div `
z-index: 3;
position: absolute;
widht: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`

export default Veggie;
