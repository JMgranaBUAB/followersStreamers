import { useEffect } from 'react';

const StreamerCard = ({ id }) => {
    useEffect(() => {
        // Create script specifically for this widget
        const script = document.createElement('script');
        script.src = 'https://countik.com/widget.js';
        script.async = true;

        script.onload = () => {
            if (typeof window.initializeCountikWidget === 'function') {
                window.initializeCountikWidget({
                    container: `#countik-widget${id}`,
                    themeColor: '#444444',
                    uniqueId: id,
                    language: 'es'
                });
            }
        };

        // Append to body as in typical React integrations
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove the script tag when component unmounts
            // This prevents head clutter if cards are toggled
            try {
                document.body.removeChild(script);
            } catch (e) {
                // Ignore if already removed
            }
        };
    }, [id]);

    return (
        <div className="boxStreamer">
            <div id={`countik-widgetJmgranaGaming`}></div>
            <a
                href={`https://countik.com/es/user/JmgranaGaming`}
                target="_blank"
                className="pow-countik"
                style={{
                    fontSize: '11px',
                    color: '#333',
                    display: 'block',
                    padding: '4px 3px',
                    textDecoration: 'none'
                }}
            >
                Impulsado por Countik™
            </a>
        </div>
    );
};

export default StreamerCard;
