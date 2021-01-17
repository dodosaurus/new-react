import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    console.log('Id tohto projectu je: ' + id);

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non eum quo reprehenderit. Exercitationem officia, facere dicta earum hic error tempore, ullam sint modi molestias eius eos tempora nesciunt iste.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jojonis</div>
                    <div>2nd September, 2AM</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
