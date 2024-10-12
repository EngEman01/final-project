import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styleTrees from './Trees.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Trees() {
    const [trees, setTrees] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [priceFilter, setPriceFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');


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
    }, []);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        if (searchQuery) {
            //fetch
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
            <div className={styleTrees.allPage}>
                <h1>All Trees</h1>
                <button className={styleTrees.fab} onClick={toggleForm}>
                    <FontAwesomeIcon icon={faFilter} />
                </button>
                <form onSubmit={handleSearchSubmit} className={styleTrees.searchbox}>
                    <input
                        type="text"
                        placeholder="Search trees..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styleTrees.searchBar}
                    />
                    <button type="submit" className={styleTrees.searchButton}>
                        <FontAwesomeIcon icon={faSearch} className='sicon' />
                    </button>
                </form>

                {showForm && (
                    <div className={styleTrees.overlay}>
                        <div className={styleTrees.formContainer}>
                            <h2>Filter Trees</h2>
                            <form onSubmit={handleFilterSubmit}>
                                <div>
                                    <label htmlFor="price">Price Range:</label>
                                    <select
                                        id="price"
                                        value={priceFilter}
                                        onChange={(e) => setPriceFilter(e.target.value)}
                                    >
                                        <option value="">Select a price range</option>
                                        <option value="0-50">$0 - $50</option>
                                        <option value="51-100">$51 - $100</option>
                                        <option value="101-200">$101 - $200</option>
                                        <option value="200+">$200+</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="category">Category:</label>
                                    <select
                                        id="category"
                                        value={categoryFilter}
                                        onChange={(e) => setCategoryFilter(e.target.value)}
                                    >
                                        <option value="">Select a category</option>
                                        <option value="Drought-tolerant">Drought-tolerant</option>
                                        <option value="Native">Native</option>
                                        <option value="Fruit">Fruit</option>
                                        <option value="Evergreen">Evergreen</option>
                                    </select>
                                </div>

                                <button type="submit" onClick={toggleForm} className={styleTrees.closeButton}>Filter</button>
                            </form>
                        </div>
                    </div>
                )}

                <div className={styleTrees.treeContainer}>
                    {trees.map((tree) => (
                        <div className={styleTrees.trees} key={tree._id}>
                            <img className={styleTrees.productImage} src={tree.image[0]} alt="" />
                            <h4 className={styleTrees.name}>{tree.name}</h4>
                            <h4 className={styleTrees.des}>{tree.description}</h4>
                            <h5>Pricing: <span style={{ color: 'green' }}>{tree.price}</span></h5>
                            <button className={styleTrees.details}>
                                <Link to={`/trees/${tree._id}`} className={styleTrees.link}>Details</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}