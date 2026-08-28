export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const email = String(body?.email || "").trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!env.DB) {
      return Response.json({ error: "Mailing-list database is not connected yet." }, { status: 503 });
    }

    await env.DB.prepare(
      "INSERT OR IGNORE INTO subscribers (email, created_at) VALUES (?, datetime('now'))"
    ).bind(email).run();

    return Response.json({ message: "You're on the list." });
  } catch (error) {
    return Response.json({ error: "Unable to subscribe right now." }, { status: 500 });
  }
}
