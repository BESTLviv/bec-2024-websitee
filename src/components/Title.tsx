
interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
    return <h1 className="title text-center relative z-10 ">{children}</h1>;
};

export default Title;
