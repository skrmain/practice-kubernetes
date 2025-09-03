const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url.pathname === "/shopping") {
      const items = [
        { id: 1, name: "Item One" },
        { id: 2, name: "Item Two" },
      ];
      return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (url.pathname === "/terminate") {
      queueMicrotask(() => {
        console.log("Terminating server...");
        server.stop(); // Bun built-in graceful stop
      });
      return new Response(JSON.stringify({ message: "Server terminating" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`🚀 Server running at http://localhost:${server.port}`);
