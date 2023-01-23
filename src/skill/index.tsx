import "./style.css"
type SkillProp={
    name:string;
    percent:number
}
function SkillBar({name,percent}:SkillProp){
    return <li>
        <h3>{name}</h3>
        <div className="skill-bar" data-percent={percent}>
            <span style={{width:`${percent}%`}}></span>
        </div>
    </li>
}
export default function Skills(){
    return <div className="skills">
        <div className="container">
            <h2 className="special-heading">our skills</h2>
            <div className="content-container">
                <img src="./images/skills.png" alt="" />
                <ul className="box-container">
                    <SkillBar name="html" percent={70}/>
                    <SkillBar name="css" percent={30}/>
                    <SkillBar name="javascript" percent={80}/>
                    <SkillBar name="python" percent={100}/>
                </ul>
            </div>
        </div>
    </div>
}