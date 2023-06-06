import './App.css';
//import katiepic from './katie-zaferes.png'
import star from './star.png'

export default function Card (props)  {

    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    console.log(badgeText)

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
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