import './style.css'


type Props = {
  images?: string[];
};

function FooterImages({ images }: Props) {
  if (!images || !Array.isArray(images)) {
    console.warn('[FooterImages] Invalid images prop:', images);
    return null;
  }

  if (images.length === 0) {
    return null;
  }

  const limitedImages = images.slice(0, 2);

  return (
    <div className="footer-images">
      {limitedImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Footer image ${index + 1}`}
          onError={(e) => {
            console.error('[FooterImages] Failed to load image:', src);
            e.currentTarget.style.display = 'none';
          }}
        />
      ))}
    </div>
  );
}

export default FooterImages;
