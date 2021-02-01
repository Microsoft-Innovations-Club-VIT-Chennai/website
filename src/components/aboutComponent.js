import React,{Component} from "react";

export default class AboutPage extends Component {
    render(){
        if(this.props.data){
            // customize this based on the needs might use images, links, logos etc
            var data = this.props.data.about.key;
        }
        return (
            <div className="about-component container">
                <div className="row align-items-center justify-content-center">
                    <h1 className="display-7 typing-main heading">
                        Who are we?
                    </h1>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 lead">
                    {data}
                    </div>
                </div>
            </div>
        );
    }
}