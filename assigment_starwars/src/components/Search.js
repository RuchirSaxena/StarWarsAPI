import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config';
import Planet from './Planet';


class Search extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);

    }

    state = {
        palnetsData: [],
        searchTextData: [],
        palnet: ""
    }

    componentDidMount() {

    }

    search(e) {
        let searchText = e.target.value;
        if (searchText) {
            axios.get(config.baseUrl + `planets/?search=${searchText}`)
                .then(palnets => {
                    console.log(palnets.data.results);
                    this.setState(() => {
                        return {
                            palnetsData: palnets.data.results,
                        }
                    });

                });
        }else{
            this.setState(() => {
                return {
                    palnetsData: []
                }
            });
        }
    }
    render() {
        let planetData = this.state.palnetsData.map(planet => {
            return <ul key={planet.name}> <Planet  {...planet} /> </ul>
        });
        return (
            <React.Fragment>
                <label htmlFor="">Search palnet</label>
                <input type="text" onChange={this.search} /><br />

                {planetData}
            </React.Fragment>
        );
    }
}

export default Search;