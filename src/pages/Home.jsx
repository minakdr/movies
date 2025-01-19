import MovieCard from "../components/MovieCards"

function Home (){
const movies =[
    {id :  1 , title : 'jhon wick' , release: '12/12/2020' }, //I named each element film 
    {id :  2 , title : 'jhon wick 2 ' , release: '12/12/2022' },
    {id :  3 , title : 'jhon wick 3 ' , release: '12/12/2023' },
    {id :  4 , title : 'jhon wick 4 ' , release: '12/12/2024' }

]

const handleSearch = () => {}
return (
< div className="home">
<form onsubmit={handleSearch} className="search-form">
    <input type="text" placeholder="Search for a movie..." className="search-input"/>

</form>

    <div className="movies-grid">
        {movies.map ((film) => (
            <MovieCard   movie ={film}  key = {film.id}/>
        ))}

    </div>

</div>
)
}

export default Home ;