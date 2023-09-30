import { Movie } from "../components/Movie";

const data = async () => {
  const response = await fetch("./movies.json");
  const json = await response.json();
  return json;
};

const {movies} = await data();

export const Info = () => {
  return <>
  <Movie key={1} data={movies[1]}/>
  </>;
};
