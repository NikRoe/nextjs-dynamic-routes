import Link from "next/link";
import { useRouter } from "next/router";
import { movies } from "../../lib/data";
import Head from "next/head";

export default function Movies() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          if (confirm("Are you aquaman?")) {
            router.push("/movies/aquaman");
          }
        }}
      >
        Are you aquaman?
      </button>
    </>
  );
}
