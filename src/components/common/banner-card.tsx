import Link from '@components/ui/link';
import Image from 'next/image';
import { useWindowSize } from '@utils/use-window-size';
import cn from 'classnames';
import { LinkProps } from 'next/link';
import { useSsrCompatible } from '@utils/use-ssr-compatible';

interface BannerProps {
  banner: any;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps['href'];
  disableBorderRadius?: boolean;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function BannerCard({
  banner,
  className,
  // variant = 'rounded',
  effectActive = false,
  classNameInner,
  href,
  // disableBorderRadius = false,
}: BannerProps) {
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  const { title, image } = banner;
  const selectedImage = getImage(width, image);
  return (
    <div className={cn('mx-auto', className)}>
      <Link
        href={href}
        className={cn(
          'h-full group flex justify-center relative overflow-hidden',
          classNameInner
        )}
      >
        <Image
          src={selectedImage.url}
          width={selectedImage.width > 1300 ? '1300' : selectedImage.width}
          height={300}
          alt={title}
          quality={100}
          className='bg-gray-300 object-cover w-full rounded-lg'
          priority={true}
        />
        {effectActive && (
          <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] max-w-[1300px] h-[500px] z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
        )}
      </Link>
    </div>
  );
}
