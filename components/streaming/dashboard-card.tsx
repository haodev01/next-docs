import { Card, CardContent } from '@/components/ui/card';

type Props = {
  title: string;
  description: string;
};
export const DashboardCard = async (props: Props) => {
  const { title, description } = props;
  const randomTime = Math.floor(Math.random() * 3000) + 1000;
  await new Promise((resolve) => {
    setTimeout(resolve, randomTime);
  });
  return (
    <Card>
      <CardContent className="p-6">
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
