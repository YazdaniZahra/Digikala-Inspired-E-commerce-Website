import Toman from "@/components/icons/Toman";
import { useQuery } from "@tanstack/react-query";

const fetchAmazingProducts = async () => {
  const response = await fetch("/api/v1/widget-factory/widget/13/");
  if (!response.ok) throw new Error("error fetching data");
  const data = await response.json();
  return data?.data?.data?.products || [];
};

export default function AmazingProducts() {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["amazingOfferProducts"],
    queryFn: fetchAmazingProducts,
    staleTime: 1000 * 60 * 60,
  });
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error occured : {error.message}</p>;

  return (
    <div className=" flex flex-row p-x-2 overflow-x-auto gap-0.5 hide-scrollbar lg:hidden ">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`bg-white flex cursor-pointer  flex-col items-start justify-center p-2 gap-1
          ${index === 0 ? "mr-3 rounded-r-lg" : ""} ${
            index === products.length - 1 ? "ml-3 rounded-l-lg" : ""
          }`}
        >
          <img
            src={product.image.url}
            alt={product.title}
            className="w-full rounded-md inline-block min-w-[130px]"
          />
          <p className="line-clamp-2 m-1 text-sm">{product.title}</p>
          <div className="text-xs flex gap-1">
            <span className="bg-digikalaPrimary text-white px-1  rounded-full">
              % {product.price.discount_percent}
            </span>
            <div className="line-clamp-2 text-gray-300 line-through">
              {product.price.rrp_price}
            </div>
          </div>
          <div className="text-black flex flex-row justify-center text-sm">
            {product.price.selling_price}
            <div>
              <Toman />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
