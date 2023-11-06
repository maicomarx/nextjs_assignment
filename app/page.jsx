"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page(){
    return (
        <div>
        <h1 style={{color:"rgb(18, 18, 139)", display:"flex", justifyContent:"center"}}>Hello there, welcome to my next.js page!</h1>
        <hr />
        <p style={{display:"flex", justifyContent:"center"}}>Count by 1 or 2. But don't go over 10!</p>
        <div class="buttons">
        <CountButton name="+1" mult={1}/> <br />
        <CountButton name="+2" mult={2}/>
        </div>
        <hr />
        <p style={{display:"flex", justifyContent:"center"}}>Here's a link to my <a href="https://github.com/maicomarx/nextjs_assignment.git"> github repository</a>.</p>
        <hr />
        <SearchBar />
        </div>
    )
}