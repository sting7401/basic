const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const body = figlet.textSync("Bun!");
        return new Response(body);
    },
  });