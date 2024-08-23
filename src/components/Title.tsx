
interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return <h2 className="title text-center relative z-10 ">{children}</h2>;
};

export default Title;
