export default function Footer(props){
    const {img, title, time, day} = props

    return(
        <footer>
            <div className="img-footer">
                <img src={img} alt=""></img>
            </div>
            <div className="infos-footer">
                <p>{title}</p>
            </div>
        </footer>
    )
}