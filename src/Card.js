import './App.css';
//import katiepic from './katie-zaferes.png'
import star from './star.png'

export default function Card (props)  {

    return (
        <div className="card">
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src={star} />
                <span> {props.rating}</span>
                <span> ({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p> <b>From ${props.price}</b> / person</p>
        </div>
    )
}