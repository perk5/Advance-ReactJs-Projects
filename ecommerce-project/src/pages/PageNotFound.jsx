import { Header } from "../components/Header";
import './PageNotFound.css'

export function PageNotFound({cart}){
    return (
        <>
            <Header /> 
        <div className="page-not-found-container">The Page you are looking is not found...</div>
        </>
        
    )
}