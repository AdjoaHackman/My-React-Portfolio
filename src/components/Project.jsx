const Project = ({portfolioURL, imgSrc, altText, styleW, title, githubURL, description}) => {
    return (
        <div className="col">
        <a href= {portfolioURL} target="_blank">
            <img src={imgSrc}
                alt={altText} style={{ width: styleW }} /></a>
        <h3><a href= {githubURL} target="_blank"> {title} GitHub</a></h3>
        <p>{description}</p>
    </div>






    )
}

export default Project;