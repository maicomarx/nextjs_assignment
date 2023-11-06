import { useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar(){
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState([""])
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toString().toLowerCase().includes(searchString.toString().toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div className="productStyle" key={index}>
                    <p className="nameAndPrice">{product.title}</p>
                    <p className="nameAndPrice">${product.price}</p>
                    <img style={{width:"200px"}} src={product.image} alt={product.title} />
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
    // useEffect(fetchAPIData, [])

    // const [searchString, setSearchString] = useState("")
    function handleChange(event){
        setSearchString(event.target.value)
    }

    return <div >
        <h1 style={{color:"rgb(18, 18, 139)", display:"flex", justifyContent:"center"}}>Online Store</h1>
        <p style={{display:"flex", justifyContent:"center"}}>Search for Products Here:</p>
        <input id="search" type="text" value={searchString} onChange={handleChange} style={{backgroundColor:"white", border:"1px solid gray", borderRadius:"5px", fontSize:"20px", display:"block", margin:"0 auto"}} />
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>
    </div>
}