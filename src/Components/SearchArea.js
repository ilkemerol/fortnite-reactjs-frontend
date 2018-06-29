import React, { Component } from 'react';
import '../css/bootstrap.css';


export default class SearchArea extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "" 
        }
    }
    render(){
        return (
        <div class="row">
            <div class="col-md-3 center-block">
                <form action="#" method="get">
                    <div class="input-group">
                        <input class="form-control" id="system-search" name="q" placeholder="Search for" required/>
                        <span class="input-group-btn">
                        <button type="submit" class="btn btn-default"><i class="glyphicon glyphicon-search"></i></button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}