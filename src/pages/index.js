import * as React from "react"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Carousel from "../components/Carousel"

import DishImg from "../images/dish.png"
import VegImg from "../images/Mask Group 8@2x.png"

import AvoCardImg from "../images/cards/avocado.png"
import SalmonCardImg from "../images/cards/plate.png"
import EggsCardImg from "../images/cards/eggs.png"



const IndexPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex h-screen">
        
            <div className="w-2/5 pl-[200px]">
              <div className="font-gilroy">
                
                <div className="absolute top-1/2 ">
                  <h1 className="text-5xl font-extrabold">You deserve better</h1>
                  <br />
                  <p className="text-4xl mt-30">Consider this a</p>
                  <p className="text-4xl mt-30">taste test intervetion</p>
                </div>
              </div>
            </div>
            
            <div className="w-3/5 bg-[#F1F7EA]">
              <img class="object-cover" src={DishImg} alt="A plate with food"/>
            </div>

      </div>

      <div className="flex h-screen">
            
            <div className="w-1/2">
              <img class="object-cover" src={VegImg} alt="Some vegetable"/>
            </div>
            
            <div className="relative w-1/2 font-gilroy ">
              <div className="absolute top-1/4 w-1/2">              
                <p className="text-4xl">We make it easy for you to cook delicious dinners</p>
                <p className="text-1xl">
                  Simply choose your recipes from a weekly menu and we'll deliver freshly picked vegetables,
                  pre-portioned ingredients and step-by-step recipes direct to your door ready for you to cook.
                </p>
              </div>
            </div>

      </div>

      <Carousel>
          <Card text="Portobello Baked Eggs with avocado & bread" img={AvoCardImg}/>
          <Card text="Summery salmon, beetroot & spicy mix" img={SalmonCardImg}/>
          <Card text="Backed Avocado Egg with herbs" img={EggsCardImg}/>
      </Carousel>
      

      
    </>
)
}

export default IndexPage
