import React from "react";
import MainArticle from "./Articles/MainArticle";
import Article1 from "./Articles/Article1";
import Article2 from "./Articles/Article2";
import Article3 from "./Articles/Article3";
import Article4 from "./Articles/Article4";
import Article5 from "./Articles/Article5";
import Article6 from "./Articles/Article6";
import Pagination from "./Pagination";

export default function Main() {
    return (
        <div id="main">
            <MainArticle />
            <section class="posts">
                <Article1 />
                <Article2 />
                <Article3 />
                <Article4 />
                <Article5 />
                <Article6 />
            </section>
            <footer>
                <Pagination />
            </footer>
        </div>
    );
}