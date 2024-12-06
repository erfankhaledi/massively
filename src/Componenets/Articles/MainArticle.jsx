import React from "react";
import pic01 from "../../assets/img/pic01.jpg";

export default function MainArticle(){
    return (
        <article className="post featured">
                <header className="major">
                    <span className="date">April 25, 2017</span>
                    <h2>
                        <a href="#">
                            And this is a
                            <br />
                            massive headline
                        </a>
                    </h2>
                    <p>
                        Aenean ornare velit lacus varius enim ullamcorper proin aliquam
                        <br />
                        facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
                        <br />
                        amet nullam sed etiam veroeros.
                    </p>
                </header>
                <a href="#" className="image main">
                    {/* Use the imported image */}
                    <img src={pic01} alt="Description of the image" />
                </a>
                <ul className="actions special">
                    <li>
                        <a href="#" class="button large">Full Story</a>
                    </li>
                </ul>
            </article>
    )
}