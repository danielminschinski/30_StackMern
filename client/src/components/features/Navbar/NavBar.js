import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

class NavBar extends React.Component{

    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/posts/new">Add post</Link>
                <Link to="/contact">Contact</Link>
            </div>
        );
    }
}

export default NavBar;