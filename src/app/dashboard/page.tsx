import LineChart from "./line-chart"
import Infos from "@/components/Infos"

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "dashboard",
}

function Foo() {

    return <h1>this function is COLOCATED in the same file.</h1>
}
    
    export default function BarChart() {

    return <div>Bar Chart page on . /dashboard
        <Infos/>
        <Foo/>
        <LineChart/>
    </div>
}