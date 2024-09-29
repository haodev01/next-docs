import { AppText } from '@/components/common/text';
import { Images } from '@/configs';
import Image from 'next/image';
import Link from 'next/link';

export const BlogItem = () => {
  return (
    <div className="blog-item border rounded-lg">
      <Link href="/" className="image">
        <Image
          src={Images.blog}
          width={1280}
          height={720}
          alt=""
          className="rounded-t-lg object-cover"
        />
      </Link>
      <div className="p-4">
        <AppText variant="a" className="text-xl font-bold mb-2 block">
          Thư viện Husky là gì? Đảm bảo chất lượng Code với Git Hooks và Husky
        </AppText>
        <AppText variant="p">
          Husky là một thư viện JavaScript mã nguồn mở giúp bạn dễ dàng quản lý
          các Git Hooks, thay vì phải thao tác thủ công trong thư mụ
        </AppText>
      </div>
    </div>
  );
};
