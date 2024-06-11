import { ActionFunctionArgs, json } from "@remix-run/node"

export const action = async (args: ActionFunctionArgs) => {
	const randomNumber = Math.random()
	return json({ randomNumber })
}
