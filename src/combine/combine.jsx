import React from "react";
import Nav from "../component/nav";
import Hero from "../component/hero";
import Description from "../component/description";
import Card from "../component/card";
import End from "../component/end";
import More from "../component/more";
import Footer from "../component/footer";
import "../App.css";

export default function Combine() {
   return (
      <div>
         <Nav />
         <Hero />
         <Description />
         <Card />
         <End />
         <More />
         <Footer />
      </div>
   );
}
