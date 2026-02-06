const StreamerCard = ({ id }) => {
    return (
        <div className="boxStreamer">
            <iframe
                height="80px"
                width="300px"
                frameBorder="0"
                src={`https://livecounts.io/embed/tiktok-live-follower-counter/${id}`}
                style={{ border: 0, width: '300px', height: '80px' }}
                title={`Live follower count for ${id}`}
            ></iframe>
        </div>
    );
};

export default StreamerCard;
