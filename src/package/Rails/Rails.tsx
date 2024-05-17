import "react-multi-carousel/lib/styles.css";
import Title from "@/components/Title/Title";
import CarouselItems from "../../components/Carousel/CarouselItems";
import strings from "@/assets/strings/strings.json";
import { RailsProps } from "@/interfaces/interfaces";

const Rails = ({ data, title }: RailsProps) => {
  return (
    <div className=" flex flex-col gap-[20px] p-[40px] carousel-custom  !z-[0] relative">
      <Title title={title || strings.movies} />
      <CarouselItems movieData={data.contents} />
    </div>
  );
};

export default Rails;
