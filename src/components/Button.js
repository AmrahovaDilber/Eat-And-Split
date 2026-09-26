export function Button({ children, onClick, type = "submit" }) {
    return (
        <button className="button" type={type} onClick={onClick}>
            {children}
        </button>
    );
}
