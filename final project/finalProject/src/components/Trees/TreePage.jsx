import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styleTreePage from "../Trees/TreePage.module.css"

export default function TreePage() {

    const { id } = useParams()
    const [tree, setTree] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:7000/trees/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTree(data);
                setLoading(false)
            })
    })
    if (!loading) {
        return (
            <>
                <div className={styleTreePage.trees}>
                    <div key={tree.id}>
                        <img className={styleTreePage.treeImage} src={tree.image[0]} alt="" />
                        <h4 >{tree.name}</h4>
                        <h5>pricing:<span style={{ color: 'green' }}> {tree.price}</span></h5>
                        <button><Link to={`/trees`}>go back to trees</Link></button>
                    </div>

                </div>
            </>
        )
    }
}


// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import styleTreePage from "../Trees/TreePage.module.css";

// export default function TreePage() {
//     const { id } = useParams();
//     const [tree, setTree] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Fetch tree data by id
//         fetch(`http://localhost:7000/trees/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log("Fetched Tree:", data); // Log to ensure the data structure
//                 setTree(data);
//                 setLoading(false);
//             });
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!tree) {
//         return <div>Tree not found.</div>;
//     }

//     return (
    
//         <div className={styleTreePage.treeContainer}>
//             <div key={tree.id}>
//                 {/* Conditional rendering: Ensure the image exists */}
//                 {tree.image && tree.image.length > 0 ? (
//                     <img
//                         className={styleTreePage.treeImage}
//                         src={tree.image[0]} // Only render if the image array exists
//                         alt={tree.name}
//                     />
//                 ) : (
//                     <div>No image available</div>
//                 )}
//                 <h4>{tree.name}</h4>
//                 <h5>
//                     Pricing: <span style={{ color: "green" }}>{tree.price}</span>
//                 </h5>
//                 <button>
//                     <Link to="/trees">Go back to trees</Link>
//                 </button>
//             </div>
//         </div>
//     );
// }