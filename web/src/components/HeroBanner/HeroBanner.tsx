import { Button } from "../ui/button"; 
import type { HeroBannerProps } from "./HeroBanner.types"; 

export function HeroBanner({ image, alt }: HeroBannerProps) { 
  return ( 
    <div 
      aria-label={alt} 
      className="relative flex flex-col justify-end min-h-120 tablet:min-h-150 p-5 rounded-[30px] bg-[#211103] shadow-[rgba(33,17,3,0.3)_0px_22px_48px] overflow-hidden"
    > 
      <div data-dc-tpl="59" className="absolute inset-0 z-0"> 
        <img 
          data-dc-tpl="60" 
          id="ra-hero" 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
        /> 
      </div> 

      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(105deg,rgba(43,8,5,0.9)_0%,rgba(107,31,18,0.65)_50%,rgba(33,17,3,0.2)_100%)]" />

      <div className="relative z-20 flex flex-col gap-4.5 mt-auto">
        <div className="max-w-2xl">
          <h1 className="m-0 font-bricolage font-extrabold text-[42px] tablet:text-[58px] leading-[0.92] tracking-[-0.035em] text-primary-text"> 
            Build <br /> 
            <em className="not-italic relative"> 
              Your Ritmo 
              <span className="absolute left-0 right-0 bottom-[0.04em] h-[0.09em] bg-primary-red rounded-full"></span> 
            </em> 
          </h1> 
        </div>
        <p className="text-[16px] max-w-[46ch] text-primary-text text-wrap font-medium ">Volcano trails, lake water, hot springs. Pick the moment you want and we will shape them into your days - one afternoon or a whole stay</p>

        <div className="mt-2 flex flex-col gap-3 tablet:flex-row tablet:items-center"> 
          <Button size="lg" effect="glow" className="w-full tablet:w-auto"> 
            Plan my days 
          </Button> 
          {/* <Button 
            size="lg" 
            variant="outline"
          > 
            Plan my days 
          </Button>  */}
        </div> 
      </div>
    </div> 
  ); 
}
