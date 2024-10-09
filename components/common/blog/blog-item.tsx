import { AppText } from '@/components/common/text';
import { Badge } from '@/components/ui/badge';
import { Images } from '@/configs';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getPlaceholderImage } from '@/utils/images';
import Image from 'next/image';

export default async function BlogItem() {
  const imageWithPlaceholder = await getPlaceholderImage(Images.blog);

  return (
    <div className="border rounded-lg">
      <Link href="/" className="image">
        <Image
          src={imageWithPlaceholder.src}
          width={1280}
          height={720}
          alt=""
          placeholder="blur"
          blurDataURL={imageWithPlaceholder.placeholder}
          className="rounded-t-lg object-cover"
        />
      </Link>
      <div className="p-4">
        <div className="mt-2 mb-3">
          <div className="flex items-center gap-x-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <AppText className="text-md">Chí Hào Nguyễn</AppText>
          </div>
        </div>
        <AppText variant="a" className="text-xl font-bold mb-2 block">
          Thư viện Husky là gì? Đảm bảo chất lượng Code với Git Hooks và Husky
        </AppText>
        <AppText variant="p">
          Husky là một thư viện JavaScript mã nguồn mở giúp bạn dễ dàng quản lý
          các Git Hooks, thay vì phải thao tác thủ công trong thư mụ
        </AppText>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <AppText className="text-xs">14/02/2022</AppText>
          </div>
          <div className="flex items-center gap-x-2">
            <Badge>Code</Badge>
            <Badge className="bg-pink-400">Git</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
