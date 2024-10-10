import { ProductGrid } from '../_components/product/product-grid';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    limit?: string;
    page?: string;
    query?: string;
  };
}) {
  const limit = searchParams?.limit ? Number(searchParams.limit) : 10;
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1" />
      <div className="col-span-4">
        <ProductGrid limit={limit} />
      </div>
    </div>
  );
}
