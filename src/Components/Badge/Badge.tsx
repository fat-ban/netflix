
interface Props {
name:string;
}


const Badge = ({name}:Props)=>{
    console.log(name);
    return(
    <span className="py-2 px-2 mx-2 my-2 bg-white text-primary rounded"
    style={{fontSize:"12px"}}
    >{name}</span>
    )
}
export default Badge;