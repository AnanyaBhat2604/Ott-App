import "react-multi-carousel/lib/styles.css";
import Title from "@/components/Title/Title";
import MovieCarousel from "../../components/Carousel/CarouselItems";
import strings from "@/assets/strings/strings.json";

const Rails = ({ data, title }: any) => {
  return (
    <div className=" flex flex-col gap-[20px] p-[40px] carousel-custom  !z-[0] relative">
      <Title title={title || strings.movies} />
      <MovieCarousel movieData={data.contents} />
    </div>
  );
};

export default Rails;
