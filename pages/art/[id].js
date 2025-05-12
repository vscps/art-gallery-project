import Head from "next/head";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtDetailPage({ art }) {
  return (
    <>
      <Head>
        <title>
          {art.title} - {art.artist}
        </title>
      </Head>
      <ArtPieceDetails art={art} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const artPieces = await res.json();

  const art = artPieces.find((item) => String(item.id) === params.id);
  if (!art) {
    return { notFound: true };
  }

  return {
    props: { art },
  };
}
