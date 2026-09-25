type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function RoomPhoto({ src, alt, priority = false, className = "" }: Props) {
  return (
    // Static files in public/images. The image optimizer drops some of these on a hard refresh.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      className={`absolute inset-0 h-full w-full object-cover object-center ${className}`}
    />
  );
}
