import { useEffect, useState } from "react";
import ytlist, { Data, ReturnedData } from "./youtubelist";

export function usePlayListUrl(url: string) {
    const state=useState<Data | null>(null)
    const [data, setData] = state;
    useEffect(() => {
        ytlist(url)
            .then((res) => {
                if (res.status) setData(res.data.videos);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [url]);
    return state;
}
