import {Link} from "react-router-dom";

function CategoryItem(props){
    const {strCategory, strCategoryThumb, strCategoryDescription} = props;

    return(
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div>
                <Link to={`/category/${strCategory}`}>Watch category</Link>
            </div>
        </div>
    );
}
export {CategoryItem};