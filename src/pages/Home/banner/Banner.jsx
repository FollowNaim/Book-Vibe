import bgHero from "@/assets/book-hero.png";
import { Button } from "@/components/ui/button";
function Banner() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-muted flex flex-col-reverse md:flex-row  gap-8 rounded-md justify-center items-center py-16 px-2">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <h1 className="playfair text-4xl md:text-5xl leading-[60px] md:leading-[70px] font-bold text-center md:text-left">
            Where Every Book Opens
            <br /> a New Adventure.
          </h1>
          <Button className="bg-[#534bf3]  mt-6" size="lg">
            View The List
          </Button>
        </div>
        <div>
          <img className="w-2/3 mx-auto md:mx-0" src={bgHero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
