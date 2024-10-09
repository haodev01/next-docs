import { productApi } from '@/api/product-api';
import { ProductItem } from '@/components/common/product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface IProductListProps {
  category: string;
}
export const ProductList = async (props: IProductListProps) => {
  const { category } = props;
  const products = await productApi.getByCategory({ category, limit: 20 });
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold uppercase mb-4">{category}</h2>
      <Carousel>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              className="md:basis-1/3 lg:basis-1/4"
              key={product.id}
            >
              <ProductItem {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
