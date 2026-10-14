import { useEffect, useState } from "react"
import { CardComponent } from "./components/CardComponent";

export const Content = () => {

    const [category, setCategory] = useState([]);
    const getCuisines = async () => {
        const res = await fetch('https://dummyjson.com/recipes/tags');
        const response = await res.json();
        setCategory(response)
    }
    useEffect(() => { getCuisines()}, [])
    return (<>
        {
            category.map((cate) => <CardComponent key={cate} src="https://cdn.dummyjson.com/recipe-images/23.webp" name = {cate}/>)
        }
    </>)
}