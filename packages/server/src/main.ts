import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
	return c.json({ text: "Hello Hono!" });
});

export default app;
