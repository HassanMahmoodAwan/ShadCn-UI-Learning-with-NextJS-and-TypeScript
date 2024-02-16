import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function page() {
  return (
    <div className=" h-full flex flex-col justify-center items-center ">
      <h1 className="text-3xl">Learn ShadCN from Chai aur Code</h1>
      
      <div className="my-[50px]">
        <button className="px-6 py-2 mx-3 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700">Tailwind Btn</button>

        <Button variant={"outline"} size={"lg"}>ShadCN Btn</Button>
      </div>

      {/* Crousal */}
      <Carousel>
        <CarouselContent>
          <CarouselItem>Hello World</CarouselItem>
          <CarouselItem>Welocme to TypeScript</CarouselItem>
          <CarouselItem>This is Next JS</CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>


    </div>
  )
}

export default page
