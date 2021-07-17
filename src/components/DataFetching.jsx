import React, { useState, useEffect } from 'react'
import axios from "axios"
export default function DataFetching() {
    const [brewery, setBrewery] = useState([])
    useEffect(() => {
        axios.get('https://api.openbrewerydb.org/breweries')
            .then(res => {
                console.log(res)
                setBrewery(res.data)
            })
            .catch((error) => { console.log(error) })
    }, [])
    return (
        <>
            {
                brewery.map(brewery => {
                    return (
                        <div key={brewery.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div  className="card border-warning h-100  ">
                            <div className="card-header bg-transparent border-warning">{brewery.name}</div>
                            <div className="card-body">
                                <div className="row">
                                        <div className="col "><p className="card-title"><i className="fas fa-beer"></i> {brewery.brewery_type} </p></div>
                                    <div className="col ">
                                        <i className="fas fa-map-marker-alt"></i> <p className="card-text">{brewery.street}, <br /> {brewery.city}, <br />{brewery.state}, <br /> {brewery.country}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent border-warning">
                                <div className="row">
                                    <div className="col ">
                                            <p className="card-text"><i className="fas fa-phone-square-alt"></i>{brewery.phone ? (brewery.phone): (<span>None</span>)}</p>
                                    </div>
                                    <div className="col ">
                                        <p className="card-text"><i className="fas fa-globe"></i><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url ? (brewery.website_url): (<span>None</span>)}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div> 
                    )
                })
            }
        </>
    )
}
