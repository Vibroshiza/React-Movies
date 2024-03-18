import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
                ) : (
                    <div className="no-result">
                        <h4 className="nothing">Nothing...</h4>
                        <h6 className="nothing-small">Try to check the name or look for something else!</h6>
                    </div>
                )}
        </div>
    );
}

export {Movies};