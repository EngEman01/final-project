import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Usefatch from '../../Trees/getTrees';
import styleUpdateTrees from './UpdateTrees.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function KnowUsers() {
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
                                <th>actins</th>
                            </tr>
                    {Trees.map((Tree) => (
                            <tr>
                                <td className={styleUpdateTrees.name}>{Tree.name}</td>
                                <td>amount</td>
                                <td className={styleUpdateTrees.price}>{Tree.price}</td>
                                <td>
                                <button className={styleUpdateTrees.delete}>
                                delete
                                </button>
                                <button className={styleUpdateTrees.update}>
                                view
                                </button>
                                </td>
                            </tr>
                      
                    ))}
                     </table>
            </div>
    </>
  )
}
