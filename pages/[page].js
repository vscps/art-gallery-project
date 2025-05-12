import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { page } = router.query;

  if (!page) return null;

  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>{title}</h1>
      <p>
        Inhalt für <strong>{title}</strong> wird hier später dynamisch erstellt.
      </p>
    </div>
  );
}
