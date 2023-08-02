import axios from 'axios'

const useService = () => {

  const getMovies = async () => {
    const response = await axios.get('http://www.omdbapi.com/?s=spiderman&apikey=cd616976')
    if (response.data.Search) {
      return response.data.Search
    }
    return
  }

  return {
    getMovies
  }
}

export default useService