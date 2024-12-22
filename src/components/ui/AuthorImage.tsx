import ExportedImage from 'next-image-export-optimizer';
// import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-64 h-64 group sm:w-auto sm:h-auto">
      {/* Main Image */}
      <ExportedImage
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="rounded-full shadow-2xl transform group-hover:scale-105 transition-all duration-300 ease-in-out"
      />

      {/* Zig-Zag Border */}
      <div className="absolute inset-0 -z-10 rounded-full border-[4px] border-dashed border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-300 ease-in-out" />

      {/* Decorative Elements */}
      <div className="absolute w-8 h-8 bg-accent rounded-full top-2 left-2 transform group-hover:rotate-45 transition-transform duration-300 ease-in-out"></div>
      <div className="absolute w-6 h-6 bg-secondary rounded-full bottom-3 right-3 transform group-hover:scale-125 transition-transform duration-300 ease-in-out"></div>
      <div className="absolute -top-4 left-16 w-16 h-1 bg-accent group-hover:w-20 transition-all duration-300 ease-in-out"></div>
      <div className="absolute -bottom-4 right-10 w-16 h-1 bg-secondary group-hover:w-20 transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default AuthorImage;
