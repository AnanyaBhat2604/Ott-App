import "react-multi-carousel/lib/styles.css";
import Title from "@/components/Title/Title";
import MovieCarousel from "../../components/Carousel/MovieCarousel";
import strings from "@/assets/strings/strings.json";

const Movies = ({ movieData, title }: any) => {
  return (
    <div className=" flex flex-col gap-[20px] p-[40px] carousel-custom  !z-[0] relative">
      <Title title={title || strings.movies} />
      <MovieCarousel movieData={movieData} />
    </div>
  );
};

export default Movies;
