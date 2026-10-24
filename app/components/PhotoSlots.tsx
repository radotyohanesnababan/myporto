import Image from "next/image";

interface PhotoSlotsProps {
  subject: string;
  images?: [string, string];
}

export function PhotoSlots({ subject, images }: PhotoSlotsProps) {
  if (!images) return null;

  return (
    <div
      className="grid grid-cols-2 gap-3"
      aria-label={`Foto ${subject}`}
    >
      {images.map((src, index) => (
        <div
          key={src}
          className="relative aspect-video overflow-hidden border-2 border-border rounded-base bg-background"
        >
          <Image
            src={src}
            alt={`${subject}, foto ${index + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 40vw, 480px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
