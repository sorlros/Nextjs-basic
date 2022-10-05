import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"

export default function FirstPost() {
	return (
		<>
			<Layout>
				<Head>
					<title>First Post</title>
					<meta name="author" contents="학생" />
				</Head>
				<h1>First Post</h1>
				<h2>
					<Link href="/">Back to home</Link>
				</h2>
			</Layout>
		</>
	)
}

;<Link href="/">
	<a>Back to home</a>
</Link>
