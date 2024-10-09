/* eslint-disable no-bitwise */

'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface IImageBlurProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  unoptimized?: boolean;
}
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (gray: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, gray, gray) + triplet(gray, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export const ImageBlur = (props: IImageBlurProps) => {
  const {
    src,
    alt = '',
    width,
    height,
    className,
    unoptimized = false,
  } = props;
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      loading="lazy"
      unoptimized={unoptimized}
      placeholder="blur"
      blurDataURL={rgbDataURL(120)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={clsx(className, {
        unblur: loaded,
      })}
      onLoad={() => {
        setLoaded(true);
      }}
    />
  );
};
