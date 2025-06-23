import react from "react";

class Aboutpersons extends react.Component{
    constructor(props){
        console.log("constructor")
            super(props);
            console.log(props);
            this.state={
                count:0
            }
        }
        componentDidMount(){
            console.log("mount")
        }
        render(){
        console.log("okk")
        const {name, email}=this.props;
        const {count}=this.state;
        return(
            <div className="person1">
            <h1>Name:{name}</h1>
            <p>email:{email}</p>
            <h2>Count:{this.state.count}</h2>
            <button onMouseEnter={()=>{
            this.setState({
                count:count+1,
            })
            }}> increase by 1</button>
            </div>
        )
    }
}
export default Aboutpersons;