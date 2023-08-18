import React from "react";
import { Link } from "react-router-dom";
import restauranfood from "../../assets/restauranfood.jpg"
import bruchetta from "../../assets/bruchetta.svg"
import greeksalad from "../../assets/greeksalad.jpg"
import restaurant from "../../assets/restaurant.jpg"
import './Home.css'

function Banner() {
    return (
        <div className="banner">
            <div className="banner-desc">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are family owned Mediterraniean restaurant, focused on traditional recipes served with a modern twist</p>
                <Link className="reserve-table-btn" to={'/booking'}>Reserve a Table</Link>
            </div>
            <div>
                <img src={restauranfood} alt="A scene depiction restaurant" />
            </div>
        </div>
    )
}
function Content() {
    return (
        <div className="content">
            <div className="content-title"> 
                <h1>This weeks specials!</h1>
                <div><Link className="reserve-table-btn" to={'/booking'}>Order Online</Link></div>
            </div>
            <section className="decoration">
                <article class="news">
                <h1>Our New Menu</h1>
                <img
                    src= {bruchetta}
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                    repellat voluptatum est harum praesentium quidem deserunt vero
                    labore tempore minus corrupti pariatur et aliquid ex sunt, alias
                    placeat maxime veniam.
                </p>
                </article>
                <article class="news">
                <h1>Book a Table</h1>
                <img
                    src= {greeksalad}
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
                    eos a eius dolores doloribus quidem vero amet dolorem molestias
                    vitae minima quae atque nostrum itaque voluptatem fugit accusantium
                    ea omnis.
                </p>
                </article>
                <article class="news">
                <h1>Opening Hours</h1>
                <img
                    src= {restaurant}
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quas cum
                    minus distinctio fugiat ipsa! Autem quis, odit nam voluptatum
                    eligendi nisi dolore nostrum repudiandae? Maiores corrupti illum
                    eligendi error!
                </p>
                <p>
                    Mon to Friday: 2pm - 10pm <br />Saterday: 2pm - 11pm <br />
                    Sunday: 2pm - 11pm
                </p>
                </article>
            </section>
        </div>
    )
}
export default function Home(){
    return(
        <div className="container">
            <Banner />
           <Content />
        </div>
    )
}