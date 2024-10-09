import { productApi } from '@/api/product-api';
import Image from 'next/image';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

const getProduct = async (id: string) => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 2000);
  // });
  const product = await productApi.get(id);
  return product;
};
export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <Image
          width={1280}
          height={720}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="col-span-2">
        <h1 className="text-3xl font-bold uppercase">{product.title}</h1>
        <p className="mt-4 text-lg text-neutral-400">{product.description}</p>
        <p className="mt-4 font-bold text-xl">{product.price}$</p>
      </div>
    </div>
  );
}
