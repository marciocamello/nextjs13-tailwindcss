import { Navlink } from "./Navlink";

export function Sidebar() {
    return (
        <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6">
            <div className="text-white h-4 w-auto">Logo</div>
            <nav className="mt-10 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <strong className="text-zinc-100 font-medium text-sm">Guides</strong>
                    <div className="text-sm flex flex-col pl-2">
                        <Navlink href="/dashboard/Introduction">Introduction</Navlink>
                        <Navlink href="/dashboard/GettingStarted">Getting Started</Navlink>
                        <Navlink href="/dashboard/Configuration">Configuration</Navlink>
                        <Navlink href="/dashboard/Deployment">Deployment</Navlink>
                        <Navlink href="/dashboard/Advanced">Advanced</Navlink>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <strong className="text-zinc-100 font-medium text-sm">Resources</strong>
                    <div className="text-sm flex flex-col pl-2">
                        <Navlink href="/dashboard/Contacts">Contacts</Navlink>
                        <Navlink href="/dashboard/FAQ">FAQ</Navlink>
                        <Navlink href="/dashboard/Support">Support</Navlink>
                        <Navlink href="/dashboard/API">API</Navlink>
                    </div>
                </div>
            </nav>
        </aside>
    )
}