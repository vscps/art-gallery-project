import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({ art }) {
  const router = useRouter();

  if (!art) return <p>Lade Kunstwerk...</p>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        ← Zurück
      </button>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingBottom: "66.66%",
        }}
      >
        <Image
          src={art.image}
          alt={art.title}
          fill
          style={{ objectFit: "cover", borderRadius: 8 }}
        />
      </div>

      <h1 style={{ marginTop: "1rem" }}>{art.title}</h1>

      <p>
        <strong>Künstler:</strong> {art.artist}
      </p>
      <p>
        <strong>Jahr:</strong> {art.year}
      </p>
      <p>
        <strong>Genre:</strong> {art.genre}
      </p>
    </div>
  );
}
