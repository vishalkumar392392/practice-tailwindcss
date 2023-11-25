export const NewArrivals = ({ item }) => {
  return (
    <div className={`${item.className} p-8 flex h-44 mb-20`}>
      <div className="flex flex-col space-y-8">
        <div className="font-semibold text-3xl">{item.title}</div>
        <div className="underline underline-offset-4">SHOP NOW +</div>
      </div>
      <div>
        <img src={item.src} className="h-40 w-50" />
      </div>
    </div>
  );
};
