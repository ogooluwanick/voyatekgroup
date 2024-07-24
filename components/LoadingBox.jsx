
import HashLoader from "react-spinners/HashLoader";

export default function LoadingBox({size,color,text , block}) {
  return (
        <div className={`${"loadingBox"}   ${ block && "dim" } `}>
                <HashLoader color={color}   size={size}  /> 
                {
                        text==="" ?
                        <span hidden>{text}</span>
                        :
                        <span>{text}</span>
                }
        </div>
  );
}


LoadingBox.defaultProps={
        size:10,
       color: "#0A6DE4",
       text:""
}