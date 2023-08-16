'use client'

import { lazy } from "react";

const VitePage = lazy(() => import("page-vite/App"));

export default function Index() {
    return <VitePage />
}