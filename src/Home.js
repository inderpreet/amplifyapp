import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import brand from "./assets/img/bot-row.png";




export default function Home (){
        return (
             <div className="App image-frame1 container">
                 <div className="row  top-row1 align-items-center">
                   <div className="col-8 home-col1">
                   FUTURE REALTORS
                   </div>
                   <div className="col-4 home-col2">
                   Welcomes You!
                   </div>
                   </div>
                   <div className="row top-row2">
                 <div className="col-4 h4">
                <Link to="/listing">
                  <button type="button" class="btn btn-danger btn-lg ">  Listing!</button>
                  </Link>
                  </div>
                  <div className="col-4 h4">
                <Link to="/soldout">
                <button type="button" class="btn btn-danger btn-lg home-buttons">  Happy Buyers!</button>
                  </Link>
                  </div>
                  <div className="col-4 h4">
                <Link to="/festivals">
                <button type="button" class="btn btn-danger btn-lg ">Festivals</button>
                    </Link>
                    </div>
                    </div>
          <div className="row bottom1">
           
                <img src={brand} alt="brand image" className="brand1" />
            
          </div>
          </div>
        
        )
    }



