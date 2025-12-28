export default function NivelamentoCard({ title, children }) {
    return (
        <div className="card nivelamento-card mb-4">
            <div className="card-body">
                {title && <h4 className="mb-3">{title}</h4>}
                {children}
            </div>
        </div>
    );
}
