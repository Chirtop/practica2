import "./PageContainer.css";
import React from "react";

export const PageContainer: React.FC = ({children}) =>{
    return <div className="container">{children}</div>
}