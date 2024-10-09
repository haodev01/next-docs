import { Skeleton } from '@/components/ui/skeleton';

export const ProductItemSkeleton = () => {
  return (
    <div className="border rounded-lg">
      <div>
        <Skeleton className="h-80 w-full" />
      </div>
      <div className="mt-4 mx-3 ">
        <Skeleton className="h-6 mb-1 w-full" />
        <div className="mt-4">
          <Skeleton className="h-3 mb-1 w-full" />
          <Skeleton className="h-3 mb-1 w-full" />
          <Skeleton className="h-3 mb-1 w-full" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <Skeleton className="h-4 mb-1 w-20" />
          <Skeleton className="h-4 mb-1 w-20" />
        </div>
      </div>
    </div>
  );
};
