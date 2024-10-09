import { Skeleton } from '@/components/ui/skeleton';

export const ProductDetailSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <Skeleton className="h-96 w-full" />
      </div>
      <div className="col-span-2">
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          {Array.from(Array(10).keys()).map((item: number) => (
            <Skeleton key={item} className="h-4 w-full mb-1" />
          ))}
        </div>
      </div>
    </div>
  );
};
