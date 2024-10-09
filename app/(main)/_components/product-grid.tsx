import { productApi } from '@/api';
import { PaginationApp } from '@/components/common/pagination';
import { ProductItem } from '@/components/common/product';

export const ProductGrid = async (props: { limit: number }) => {
  const { limit } = props;
  const products = await productApi.getAll({ limit: Number(limit) });
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
      <div className="mt-4">
        <PaginationApp />
      </div>
    </div>
  );
};
