import { useEffect, useState } from "react";
import SpotlightArt from "@/components/Spotlight";

export default function SpotlightPage() {
  const [spotlight, setSpotlight] = useState(null);

  // useEffect wird beim Laden der Seite ausgeführt (Aufpassen wegen Loop!)
  useEffect(() => {
    const fetchArt = async () => {
      try {
        const res = await fetch("https://example-apis.vercel.app/api/art"); 
        const data = await res.json(); 

        // Zufälliges Kunstwerk auswählen
        const random = data[Math.floor(Math.random() * data.length)];
        setSpotlight(random); 
      } catch (err) {
        console.error("Fehler beim Laden des Kunstwerks:", err);
      }
    };

    fetchArt();
  }, []);

    return <SpotlightArt spotlight={spotlight} />;

}
