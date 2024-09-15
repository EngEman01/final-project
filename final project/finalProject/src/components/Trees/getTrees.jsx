import { useEffect, useState } from "react";

const usefatch = () => {
    let [trees, setTrees] = useState([]);

    let getData = async () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => { 
                setTrees(data);
             })
    }

    getData(); 
    return trees;
}


export default usefatch;