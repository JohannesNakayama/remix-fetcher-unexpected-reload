import { type LoaderFunctionArgs, type MetaFunction, json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { FormEvent } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
	const randomNumber = Math.random()
	return json({ randomNumber })
}

export default function Index() {
	const { randomNumber } = useLoaderData<typeof loader>()

	const fetcher = useFetcher()

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		fetcher.submit(event.currentTarget)
	}

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Random number</h1>
			<p>{randomNumber}</p>
			<fetcher.Form method="POST" action="/formAction" onSubmit={handleSubmit}>
				<button name="submit">generate new</button>
			</fetcher.Form>
			<div>{JSON.stringify(fetcher.data)}</div>
    </div>
  );
}
