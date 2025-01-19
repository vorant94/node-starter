import { helloWorld } from "api";
import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
	helloWorld();

	return c.json({ text: "Hello Hono!" });
});

export default app;
