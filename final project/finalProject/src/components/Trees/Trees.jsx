import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Usefatch from '../Trees/getTrees';
import styleTrees from './Trees.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Trees() {
    const Trees = Usefatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [priceFilter, setPriceFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Fetch search
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
                    {Trees.map((Tree) => (
                        <div className={styleTrees.trees} key={Tree._id}>
                            <img className={styleTrees.productImage} src={Tree.image[0]} alt="" />
                            <h4 className={styleTrees.name}>{Tree.name}</h4>
                            <h4 className={styleTrees.des}>{Tree.description}</h4>
                            <h5>Pricing: <span style={{ color: 'green' }}>{Tree.price}</span></h5>
                            <button className={styleTrees.details}>
                                <Link to={`/trees/${Tree._id}`} className={styleTrees.link}>Details</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
