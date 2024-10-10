import { Suspense } from 'react';
import { DashboardCard, DashboardCardSkeleton } from '../_components/streaming';

export default function Page() {
  return (
    <div>
      <h1>Loading Streaming</h1>
      <div className="grid  grid-cols-4 gap-6">
        <Suspense fallback={<DashboardCardSkeleton />}>
          <DashboardCard title="Total Users" description="10" />
        </Suspense>
        <Suspense fallback={<DashboardCardSkeleton />}>
          <DashboardCard title="Toal Articles" description="10" />
        </Suspense>
        <Suspense fallback={<DashboardCardSkeleton />}>
          <DashboardCard title="Total Comments" description="10" />
        </Suspense>
        <Suspense fallback={<DashboardCardSkeleton />}>
          <DashboardCard title="Total Assets" description="10" />
        </Suspense>
      </div>
    </div>
  );
}
