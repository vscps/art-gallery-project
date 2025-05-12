import Image from "next/image";

export default function SpotlightArt({ spotlight }) {
  if (!spotlight) return <h1>Loading ...</h1>;

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>🎨 Spotlighted Art</h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {}
        <Image
          src={spotlight.imageSource} 
          alt={spotlight.name}        
          width={400}
          height={200}
          loading="lazy"
          layout="responsive"
          style={{ borderRadius: "12px" }}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>

      {}
      <p>
        <strong>{spotlight.artist}</strong>
      </p>
    </div>
  );
}
