import { ProductItemSkeleton } from '@/components/common/skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

export const ProductListLoading = () => {
  return (
    <div className="mb-10">
      <Skeleton className="w-48 h-6 mb-4" />
      <Carousel>
        <CarouselContent>
          {Array.from(Array(20).keys()).map((item) => (
            <CarouselItem key={item} className="md:basis-1/3 lg:basis-1/4">
              <ProductItemSkeleton />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
