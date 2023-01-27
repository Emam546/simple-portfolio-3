import axios from "axios";
export type Data = {
    videoId: string;
    thumbnails: {
        url: string;
        width: number;
        height: number;
    }[];
    title: string;
    lengthSeconds: number;
    isPlayable: boolean;
}[];
export type ReturnedData = {
    status: boolean;
    msg: string;
    data: {
        header: string;
        videos: Data;
    };
};

const domainLink = "https://youtube-playlists.onrender.com";
function MergeUrl(id: string) {
    return `${domainLink}/api/playlist?list=${id}`;
}
export default async (id: string): Promise<ReturnedData> => {
    console.log(MergeUrl(id));
    const res = await axios(MergeUrl(id));
    return res.data;
};
