import { AppText } from '@/components/common/text';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';

interface IProductProps {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: string;
}
export const ProductItem = (props: IProductProps) => {
  const { title, description, image, category, price, id } = props;
  return (
    <div className="border rounded-lg">
      <Link href={`/product/${id}`} className="image  ">
        <Image
          src={image}
          width={450}
          height={1500}
          alt=""
          className="rounded-t-lg min-h-[300px] max-h-[300px] object-cover"
        />
      </Link>
      <div className="p-4">
        <AppText
          variant="a"
          className="text-xl font-bold mb-2 block t-ellipsis-2"
        >
          {title}
        </AppText>
        <AppText variant="p" className="t-ellipsis-3">
          {description}
        </AppText>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <AppText className="text-md">{price}$</AppText>
          </div>
          <div className="flex items-center gap-x-2">
            <Badge>{category}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
