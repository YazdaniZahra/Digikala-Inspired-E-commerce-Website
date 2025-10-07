import promotionBarImage from "@/assets/images/promotionBarImage.webp";
export default function PromotionBar() {
  return (
    <div className="w-full h-9">
      <img
        src={promotionBarImage}
        alt="Promotion bar banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
