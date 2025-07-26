import bg from "../assets/background.mp4";
import "./Background.css";

export default function Background(){
    return(
        <>
        <video src={bg} autoPlay loop muted/>
        </>
    );
}