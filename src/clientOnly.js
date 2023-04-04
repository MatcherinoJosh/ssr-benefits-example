import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { largeComponentData } from "../src/largeComponent";

export default function Home() {
  const [randomNum] = useState(Math.floor(Math.random() * 1_000_000));
  const [info, setInfo] = useState(`Hydrating (lucky number: ${randomNum})`);

  const numAs = largeComponentData.split("").filter((x) => x === "a").length;

  useEffect(() => {
    setInfo(`Done hydrating, dear ${randomNum}!`);
  }, [randomNum]);

  return (
    <>
      <Head>
        <title>Example SSR Benefits</title>
      </Head>
      <main>
        <h1>{info}</h1>
        <h1>Payload size: {largeComponentData.length}</h1>
        <h1>Number of As: {numAs}</h1>
        <p>
          Even though the top text might&apos;ve not changed from
          &quot;hydrating...&quot; yet, you still see the immediate results of
          an expensive computation.
        </p>
        <p>
          In this case, the expensive computation was computing the number of As
          and the length of some really large data.
        </p>
        <Link href="/">Click to compare this to what SSR would be like</Link>
        <p>Hell, you can even see a preview of that data for free:</p>
        <textarea
          readOnly
          value={largeComponentData.substring(0, 1000)}
        ></textarea>
      </main>
    </>
  );
}
