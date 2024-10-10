import { Suspense } from 'react';
import { categoryApi } from '@/api';
import { ProductList } from './_components/product/product-list';
import { ProductListLoading } from './_components/product/product-list-loading';

const getCategories = async () => {
  const ressponse = await categoryApi.list();
  return ressponse;
};
export default async function Home() {
  const categories = await getCategories();

  return (
    <>
      {categories.map((category: string) => (
        <Suspense key={category} fallback={<ProductListLoading />}>
          <ProductList category={category} />
        </Suspense>
      ))}
    </>
  );
}
