import React, { useState } from 'react'

function DescriptionSearch({ searchQuery }) {
    const [item, setState] = useState('');
    const querySearch = () => {
        if (item != null) {
            searchQuery(item)
        }
    }
    return (
        <div className="row description__search mt-3">
            <div className="col-3 description__search-input">
                <datalist id="datlist">
                    <option name="searchText" onChange={e => setState(e.target.value)}/>
                </datalist>
            </div>
            <div className="col-2 text-center description__search-button">
                <button type="button" className="btn btn-primary" onClick={querySearch} >Search</button>
            </div>
        </div> 
    )
}
export default DescriptionSearch;



{/*<div className="searchBar">*/}
{/*    */}{/*Search Description function*/}
{/*    <div className="expiationData">*/}
{/*        <DescriptionSearch searchQuery={item => searchQuery(item)} />*/}
{/*    </div>*/}
{/*</div>*/}