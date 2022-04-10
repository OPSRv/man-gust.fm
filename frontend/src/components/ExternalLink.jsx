const ExternalLink = ({ children, to, ...props }) => {
    return (
        <a
            href={to}
            {...props}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a >
    );
};

export { ExternalLink };
