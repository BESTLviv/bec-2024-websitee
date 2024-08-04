import Image from "next/image"
import SlideProps from "@/models/team-slider";

interface SlideComponentProps extends SlideProps {
    className?: string;
  }

const Slide: React.FC<SlideComponentProps> = ({img, position, name, className}) => {
    return (
        <div className={className}>
            <Image className=" shrink-0" priority src={img} alt="img"/>
            <h2>{position}</h2>
            <span></span>
            <p>{name}</p>
        </div>
    )
}
export default Slide;