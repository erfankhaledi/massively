import React from "react";
import pic02 from "../../assets/img/pic02.jpg"

export default function Article1(){
    return(
        <article>
            <header>
                <span className="date">April 24, 2017</span>
                <h2>
                    <a href="#">
                        Sed magna
                        <br />
		    			ipsum faucibus
                    </a>
                </h2>
            </header>
            <a href="#" className="image fit">
                <img src={pic02} alt="" />
            </a>
            <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.
            </p>
            <ul className="actions special">
                <li style={{ padding: '30px 2px' }}>
                    <a href="#" className="button" >
                        Full Story
                    </a>
                </li>
            </ul>   
    </article>
    )
}