function MyCard({title , person}) {
    return (

        <div className="card">
            <div className="card-border-top">
            </div>
            <div className="img">
                <img src="" alt="" />
            </div>
            <span> {person}</span>
            <p className="job">{title}</p>
            <button> Click
            </button>
        </div>
    )
}

export default MyCard;