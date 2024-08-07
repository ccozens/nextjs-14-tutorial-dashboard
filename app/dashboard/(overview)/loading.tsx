// loading.tsx is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads and implements streaming (ie, each component loads in parallel and displays when ready)

import DashboardSkeleton from "../../ui/skeletons"

export default function Loading () {
    return <DashboardSkeleton />
}