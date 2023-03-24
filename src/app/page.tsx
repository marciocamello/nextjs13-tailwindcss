
export default function Home() {
    return (
        <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:bg-zinc-900 prose-a:text-cyan-400">
            <h1>Authentication</h1>
            <p className="lead">You'll need to authenticate your requests to access any of the endpoints in the Protocol API. In this guide, we'll look at how authentication works. Protocol offers two ways to authenticate your API requests: Basic authentication and OAuth2 with a token — OAuth2 is the recommended way.</p>
            <h2 id="basic-authentication" className="scroll-mt-24">
                <a className="group text-inherit no-underline hover:text-inherit" href="/authentication#basic-authentication">
                    <div className="absolute mt-1 ml-[calc(-1*var(--width))] hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
                        <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                            <svg viewBox="0 0 20 20" fill="none" stroke-linecap="round" aria-hidden="true" className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white">
                                <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"></path>
                            </svg>
                        </div>
                    </div>Basic authentication
                </a>
            </h2>
            <pre className="overflow-x-auto p-4 text-xs text-white">
                <code className="language-bash">
                    <span>
                        <span>curl https://api.protocol.chat/v1/conversations \</span>
                    </span>
                    <span>
                        <span>  -u username:password</span>
                    </span>
                    <span></span>
                </code>
            </pre>
            <p>With basic authentication, you use your username and password to authenticate your HTTP requests. Unless you have a very good reason, you probably shouldn't use basic auth. Here's how to authenticate using cURL:</p>
            <p>Please don't commit your Protocol password to GitHub!</p>
            <h2 id="o-auth2-with-bearer-token" className="scroll-mt-24">
                <a className="group text-inherit no-underline hover:text-inherit" href="/authentication#o-auth2-with-bearer-token">OAuth2 with bearer token</a>
            </h2>
            <p>The recommended way to authenticate with the Protocol API is by using OAuth2. When establishing a connection using OAuth2, you will need your access token — you will find it in the <a href="/authentication#">Protocol dashboard</a> under API settings. Here's how to add the token to the request header using cURL: </p>
            <p>Always keep your token safe and reset it if you suspect it has been compromised.</p>
            <h2 id="using-an-sdk" className="scroll-mt-24">
                <a className="group text-inherit no-underline hover:text-inherit" href="/authentication#using-an-sdk">Using an SDK</a>
            </h2>
            <p>If you use one of our official SDKs, you won't have to worry about any of the above — fetch your access token from the <a href="/authentication#">Protocol dashboard</a> under API settings, and the client library will take care of the rest. All the client libraries use OAuth2 behind the scenes. </p>
        </main>
    )
}
