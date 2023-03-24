

export default async function Dashboard({ params, searchParams }: {
    searchParams: {
        [key: string]: string
    },
    params: {
        slug: string
    }
}) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:bg-zinc-900 prose-a:text-cyan-400">
            <h1>{params.slug}</h1>
        </main>
    )
}