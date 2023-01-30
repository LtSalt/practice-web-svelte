export async function load({ fetch }) {
    const res = await fetch('src/lib/server/data.json');
    const data = await res.json();
    return { data };
}