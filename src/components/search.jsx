import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: 'all'
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }), 
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return <div className="row white-background">
            <div className="col s12">
                <div className="input-field">
                    <input className="validate" placeholder="search" type="search" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} onKeyDown={this.handleKey}/>
                    <button className="btn search-btn black accent-1 center" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                </div>
                <div>
                    <label>
                        <input class="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === "all"}/>
                        <span className="text-black">All</span>
                    </label>
                    <label>
                        <input class="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === "movie"}/>
                        <span className="text-black">Movies</span>
                    </label>
                    <label>
                        <input class="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === "series"}/>
                        <span className="text-black">Series</span>
                    </label>
                    <label>
                        <input class="with-gap" name="type" type="radio" data-type="game" onChange={this.handleFilter} checked={this.state.type === "game"}/>
                        <span className="text-black">Games</span>
                    </label>
                </div>
            </div>
        </div>
    }
}

export { Search };