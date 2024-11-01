import bgHero from "@/assets/book-hero.png";
import { Button } from "@/components/ui/button";
function Banner() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-muted flex gap-8 rounded-md justify-center items-center py-16">
        <div>
          <h1 className="playfair text-5xl leading-[70px] font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <Button className="bg-green mt-6" size="lg">
            View The List
          </Button>
        </div>
        <div>
          <img className="w-2/3" src={bgHero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
