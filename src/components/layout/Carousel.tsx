import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

export const Carousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section ref={sliderRef} className="keen-slider w-full z-10">
      <div className="keen-slider__slide flex justify-center  ">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045834/tapiz3_bz9qsj.jpg"
          alt="Slide 1"
          className="h-3/6  object-cover"
        />
      </div>
      <div className="keen-slider__slide flex justify-center  ">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1740248991/tapiz4_rjuc5w.jpg"
          alt="Slide 2"
          className="h-3/6  object-cover"
        />
      </div>
      <div className="keen-slider__slide flex justify-center  ">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1740248991/tapiz3_vx3y42.jpg"
          alt="Slide 3"
          className="h-3/6  object-cover"
        />
      </div>
      <div className="keen-slider__slide flex justify-center  ">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739543406/colgante-04_mxk8vo.jpg"
          alt="Slide 4"
          className="h-3/6  object-cover"
        />
      </div>
      <div className="keen-slider__slide flex justify-center  ">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045834/tapiz_xhgfeo.jpg"
          alt="Slide 5"
          className="h-3/6  object-cover"
        />
      </div>
      <div className="keen-slider__slide flex justify-center ">
        <img
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045818/colgante6_nfcxbn.jpg"
          alt="Slide 6"
          className="h-3/6  object-cover"
        />
      </div>
    </section>
  );
};
