import { useEffect, useState } from 'react'
import styles from './App.module.css'
import useService from './hooks/useService'
import Card from './Card'

function App() {
  const [movies, setMovies] = useState()
  const { getMovies } = useService()

  useEffect(() => {
    setMovies(getMovies())
  }, [])

  //se deben renderizar solo las peliculas que tengan Poster, 
  //y se deben ordenar cronologicamente. 

  return (
    <div>
      <h1>Prueba Tecnica</h1>
      <div className={styles.moviesContainer}>
        {movies.map((movie, index) => <Card
          title={movie.Title}
          src={movie.Poster}
          year={movie.Year}
        />)}
      </div>
    </div>

  )
}

export default App
