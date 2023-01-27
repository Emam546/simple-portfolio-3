import { useEffect, useState } from "react";
import { usePlayListUrl } from "./getDataApi";
import { Data } from "./youtubelist";
import "./style.css";
const EmptyData: Data = [...Array(6)].map(() => {
    return {
        title: "",
        lengthSeconds: -1,
        isPlayable: true,
        thumbnails: [],
        videoId: "",
    };
});
function shuffle<T>(array: T[]) {
    let currentIndex = array.length,
        randomIndex;
    array = [...array];
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
function VideoContainer({ url }: { url: string }) {
    const [data, setData] = usePlayListUrl(url);
    const [iIndex, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0);
    }, [data]);
    function SideBar() {
        let resData = data || EmptyData;
        return (
            <ul className="titles">
                {resData.map(({ title, lengthSeconds }, index) => {
                    let text = "";
                    if (lengthSeconds >= 0) {
                        const s = lengthSeconds % 60;
                        const m = Math.floor(lengthSeconds / 60) % 60;
                        const h = Math.floor(lengthSeconds / (60 * 60));
                        var hDisplay =
                            h > 0 ? (h < 10 ? "0" + h + ":" : h + ":") : "";
                        var mDisplay =
                            m > 0 ? (m < 10 ? "0" + m + ":" : m + ":") : "00:";
                        var sDisplay = s > 0 ? (s < 10 ? "0" + s : s) : "00";
                        text = `${hDisplay}${mDisplay}${sDisplay}`;
                    }

                    return (
                        <li onClick={() => setIndex(index)} key={index}>
                            <h3>{title}</h3>
                            <span>{text}</span>
                        </li>
                    );
                })}
            </ul>
        );
    }
    function toggleShuffle() {
        if (data)
            setData((predata) => {
                if (predata) return shuffle(predata);
                return predata;
            });
    }
    return (
        <div className="content-container">
            <div className="side-bar">
                <div className="head">
                    <span>Top videos</span>
                    <i
                        className="fa-solid fa-shuffle"
                        onClick={() => toggleShuffle()}
                    ></i>
                </div>
                <SideBar />
            </div>
            <div className="thumbnail">
                <div className="img-holder">
                    {data && data[iIndex] && (
                        <img src={data[iIndex].thumbnails.at(-1)?.url} alt="" />
                    )}
                </div>
                <div className="sub-thumbnail">
                    {data && data[iIndex] && data[iIndex].title}
                </div>
            </div>
        </div>
    );
}
export function TopVideos({ url }: { url: string }) {
    return (
        <div className="top-videos">
            <div className="container">
                <h2 className="special-heading">top videos</h2>
                <VideoContainer url={url} />
            </div>
        </div>
    );
}
