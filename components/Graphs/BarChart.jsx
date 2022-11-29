import { dividerClasses } from "@mui/material";
import styles from "./BarChart.module.scss";

export default function BarChart({data}){

    const scaleX = scaleBand().domain(data.map(({label}) => label))
        .range([0,width]);

    return (
        <div>
            <svg
                width={500}
                height={300}
            >
                <g></g>
            </svg>


        </div>
    )
}