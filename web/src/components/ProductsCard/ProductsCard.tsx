import CardPlaceHolder from "@/assets/hero/hero-bg.jpeg";

export function ProductsCard() {
  return (
    <div className="w-full max-w-sm shadow-xs bg-primary-foreground/90 text-white rounded-2xl">
      <img
        className=" rounded-t-2xl mb-4"
        src={CardPlaceHolder}
        alt="product image"
      />
      <div>
        <div className="px-2">
          <h5 className="text-xl text-heading font-semibold tracking-tight ">
                Horseback Riding with river crossing
          </h5>
          <div className="flex items-center justify-between mt-2">
            <span className="text-3xl font-extrabold text-heading">$65</span>
            <button
              type="button"
              className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
            >
          
              Add to cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
