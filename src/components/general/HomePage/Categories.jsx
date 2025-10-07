import { useQuery } from "@tanstack/react-query";

export default function Categories() {
  const fetchcategoryItems = async () => {
    const response = await fetch("/api/v3/");
    if (!response.ok) throw new Error("error fetching data");
    const data = await response.json();
    const widget = data?.data?.widgets?.find(
      (widget) => widget.type === "touchpoint_group"
    );

    return widget?.data?.default_groups?.items;
  };
  const {
    data: categoryItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categoryItems"],
    queryFn: fetchcategoryItems,
    staleTime: Infinity,
  });

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error occured : {error.message}</p>;
  const categoryGroupedItems = [];
  for (let i = 0; i < categoryItems.length; i += 2) {
    categoryGroupedItems.push(categoryItems.slice(i, i + 2));
  }
  return (
    <div className="flex flex-col justify-between gap-3 pt-5 lg:hidden">
      <h2 className="font-bold text-lg px-4">دسته‌بندی‌ها</h2>
      <div className="flex flex-row overflow-x-auto  gap-5 justify-between items-start hide-scrollbar">
        {categoryGroupedItems.map((categoryGroupedItem) => {
          return (
            <div
              key={categoryGroupedItem[0].id}
              className="flex flex-col gap-3 "
            >
              {categoryGroupedItem.map((catItem) => (
                <div key={catItem.id} className="w-20 gap-1">
                  <img src={catItem.image.url} alt={catItem.image.alt} />
                  <div className="text-xs text-center h-9">{catItem.title}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
