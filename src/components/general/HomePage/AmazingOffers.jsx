import AmazingProducts from "./AmazingProductsItems";
import AmazingProductsDesktop from "./AmazingProductsItemsDesktop";
import AmazingOfferHDesk from "./AmazingOfferHDesk";
export default function AmazingOffer() {
  return (
    <div className="bg-digikalaOffers w-screen pb-4 lg:py-4 flex flex-col ">
      <AmazingOfferHDesk className="lg:hidden" />
      <AmazingProducts />
      <AmazingProductsDesktop />
    </div>
  );
}
