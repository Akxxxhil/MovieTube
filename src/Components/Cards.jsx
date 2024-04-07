import Card from "./Card";
function Cards({ movies,deleteRemover }) {
  return (
    <>
      <div className="border">
        {movies.map((movie) => (
          <Card {...movie}key={movie.id} deleteRemover={deleteRemover} ></Card>
        ))}
      </div>
    </>
  );
}
export default Cards;
