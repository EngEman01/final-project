import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Usefatch from '../../Trees/getTrees';
import styleUpdateTrees from './UpdateTrees.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function UpdateTrees() {
    // const Trees = Usefatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [priceFilter, setPriceFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [Trees, setTrees] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/tree/getTrees");
                const data = await response.json();
                setTrees(data);
            } catch (error) {
                console.error("Error fetching trees:", error);
            }
        };

        fetchData();
    },[]);


    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (searchQuery) {
            try {
                const response = await fetch(`http://localhost:4000/tree/searchTrees?name=${searchQuery}`);
                const data = await response.json();
                setTrees(data)
            }
            catch (error) {
                console.log(error);
            }
        } else {
            const response = await fetch("http://localhost:4000/tree/getTrees");
            const data = await response.json();
            setTrees(data);
        }
        setSearchQuery('');
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Logic for filtering trees based on price and category
        console.log('Filtering by:', { priceFilter, categoryFilter });
        // Reset the form
        setPriceFilter('');
        setCategoryFilter('');
        toggleForm();
    };

    return (
        <>
            <div className={styleUpdateTrees.updatePage}>
                <h1>All Trees</h1>
                <form onSubmit={handleSearchSubmit} className={styleUpdateTrees.searchbox}>
                    <input
                        type="text"
                        placeholder="Search trees..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styleUpdateTrees.searchBar}
                    />
                    <button type="submit" className={styleUpdateTrees.searchButton}>
                        <FontAwesomeIcon icon={faSearch} className='sicon' />
                    </button>
                </form>

                <table className={styleUpdateTrees.trees}>
                    <tr>
                        <th>trees</th>
                        <th>amount</th>
                        <th>price</th>
                        <th>actions</th>
                    </tr>
                    {Trees.map((Tree) => (
                        <tr>
                            <td className={styleUpdateTrees.name}>{Tree.name}</td>
                            <td>{Tree.inventory}</td>
                            <td className={styleUpdateTrees.price}>{Tree.price}</td>
                            <td>
                                <button className={styleUpdateTrees.delete}>
                                    delete
                                </button>
                                <button className={styleUpdateTrees.update}>
                                    update
                                </button>
                            </td>
                        </tr>

                    ))}
                </table>
            </div>
        </>
    )
}





