export default function NivelamentoCover({
    src,
    alt,
}) {
    return (
        <div className="card nivelamento-card mb-4">
            <img
                src={src}
                alt={alt}
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    margin: "0 auto",
                    padding: "16px",
                    background: "#fff",
                }}
            />
        </div>
    );
}
