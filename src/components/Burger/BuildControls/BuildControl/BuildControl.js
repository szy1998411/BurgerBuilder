import React, {Component} from 'react'
import styled from "@emotion/styled";

const BuildControlDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 5px 0;
`;

const BuildControlButtonLess = styled.button`
display: block;
font: inherit;
padding: 5px;
margin: 0 5px;
width: 80px;
border: 1px solid #AA6817;
cursor: pointer;
outline: none;
background-color: #D39952;
color: white;
disabled: ${props => props.disabled}
&:hover{
    background-color: #DAA972;
    color: white;
}
&:active{
    background-color: #DAA972;
    color: white;
}
&:disabled{
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
}

`;

const BuildControlButtonMore = styled.button`
display: block;
font: inherit;
padding: 5px;
margin: 0 5px;
width: 80px;
border: 1px solid #AA6817;
cursor: pointer;
outline: none;
background-color: #8F5E1E;
color: white;
&:hover{
    background-color: #99703F;
    color: white;
}
&:active:{
    background-color: #99703F;
    color: white;
}
`;

const LabelDiv = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`;

export default class BuildControl extends Component{

    render(){
        console.log("disabled: ", this.props.disabled);
        return (
            <BuildControlDiv>
                <LabelDiv>{this.props.label} </LabelDiv>
                <BuildControlButtonLess onClick={
                    ()=>{
                        this.props.removeHandler(this.props.type);
                    }} disabled = {this.props.disabled}> Less </BuildControlButtonLess>
                <BuildControlButtonMore onClick={
                    ()=>{
                        this.props.addHandler(this.props.type);
                    }
                }> More </BuildControlButtonMore>
            </BuildControlDiv>
        );
    };

}