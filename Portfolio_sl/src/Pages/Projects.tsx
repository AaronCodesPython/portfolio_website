import { Outlet } from "react-router-dom";
import Posts from "../widgets/AllPosts";

export default function Projects(){
    return (
        <div>
            <h1>Projects</h1>
            <Posts query='*[_type == "post" && references(*[_type == "category" && title == "Projects"][0]._id)]{
                title,
                publishedAt,
                _id,
                "slug": slug.current
            }'></Posts>
            <Outlet />
        </div>
    );
}