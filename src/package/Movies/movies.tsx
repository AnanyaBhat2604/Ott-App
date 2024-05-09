import "react-multi-carousel/lib/styles.css";
import Title from "@/components/Title/Title";
import MovieCarousel from "../../components/Carousel/MovieCarousel";
import strings from "@/assets/strings/strings.json";

const Movies = ({ movieData }: any) => {
  return (
    <div className="bg-black flex flex-col gap-[20px] p-[40px] carousel-custom ">
      <Title title={strings.movies} />
      <MovieCarousel movieData={movieData} />
    </div>
  );
};

export default Movies;
