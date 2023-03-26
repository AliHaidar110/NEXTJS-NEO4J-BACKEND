import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();

	return (
		<>
			<Head>
				<title>Nextjs Neo4j</title>
				<meta
					name="description"
					content="Generated by Abdallah Moubarak"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<main>
				<div>visit localhost:3000/api/graphql</div>
			</main>
			{session ? (
				<>
					Signed in as {session?.user?.email} <br />
					<button onClick={() => signOut()}>Sign out</button>
				</>
			) : (
				<>
					Not signed in <br />
					<button onClick={() => signIn()}>Sign in</button>
				</>
			)}
		</>
	);
}
