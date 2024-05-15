export default function YoutubeBannerVideo({ url, heading, description }: any) {
    return (
        <div className="bg-[#202020] rounded-md py-10 px-10 pb-5">

            <div className="youtube-video grid grid-cols-3">
                <iframe className="col-span-2 w-[80%] ml-[10%]" height="315" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                {/* <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                <div className="">
                    <h2 className="font-bold text-xl my-4 text-white">{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}