import { useState, useEffect } from "react";
const count = 1;
function GetWallDetail(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [movies, setMovies] = useState([]);
    // useEffect(() => {
    //     axios
    //     .get(`/wallDetails`)
    //     .then(res => {
    //         const data = res.data
    //         setState(data.wallDetails);
    //     })
    // } , [count])
    useEffect(() => {
        const getData = async () => {
          await fetch("https://www.htmlhints.com/api/data.php")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result.languageList);
              setMovies(result.moviesData);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
        };
        getData();
      }, []);
    
    return items;
}
export {GetWallDetail};
