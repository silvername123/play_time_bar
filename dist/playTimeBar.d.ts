import React from "react";
import dayjs from "dayjs";
type DateType = {
    startTime: dayjs.Dayjs;
    endTime: dayjs.Dayjs;
};
interface TimeProgressProps {
    nowTime?: string;
    timeDataList?: DateType[];
    onMouseMove?: (time: string, isDown: boolean) => void;
    onMouseLeave?: (time: string, isDown: boolean) => void;
    onMouseDown?: (time: string, isDown: boolean) => void;
    onMouseUp?: (time: string, isDown: boolean) => void;
    onMouseEnter?: (time: string, isDown: boolean) => void;
    zoomProps?: {
        onZoomIn?: (time: string) => void;
        onZoomOut?: (time: string) => void;
        zoomInMultiplier?: number;
        zoomOutMultiplier?: number;
    };
    maxSize?: number;
    minSize?: number;
    intervalSize?: number;
    lineSetting?: {
        topLine: {
            topColor?: string;
            lineWidth?: number;
            x: number;
            y: number;
        };
        bottomLine: {
            bottomColor?: string;
            lineWidth?: number;
            x: number;
            y: number;
        };
        middleLine: {
            middleColor?: string;
            lineWidth?: number;
            x: number;
            y: number;
        };
        recordBar?: {
            recordColor?: string;
            lineWidth?: number;
            x: number;
            y: number;
        };
        lineText?: {
            fontSize?: number;
            color?: string;
            y?: number;
        };
    };
    isZoom?: boolean;
}
export declare const PlayTimeBar: (props: TimeProgressProps, ref: any) => React.JSX.Element;
export default PlayTimeBar;