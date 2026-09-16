import React from 'react';
import './css/Posts.css';
import GeneralPost from './Posts-content/generalPost.jsx';
import SpotifyViewerPost from './Posts-content/spotifyViewerPost.jsx';
import GeneralUpdateOnePost from './Posts-content/generalUpdateOnePost.jsx';

function Posts(){
    const [currentPostIndex, setCurrentPostIndex] = React.useState(0);

    const posts = [
        {
            id: 0,
            title: "Information",
            content: <GeneralPost />
        },
        {
            id: 1,
            title: "Spotify Viewer",
            content: <SpotifyViewerPost />
        },
        {
            id: 2,
            title: "General Info     1",
            content: <GeneralUpdateOnePost />
        },
    ];

    return (
        <div className="posts-container">
            <div className = "side-column">
                <div className = "side-column-header"> Posts </div>
                <div className = "posts-list">
                    {[...posts].reverse().map((post) => ( //Sorts list in reverse order so most recent posts are first
                        <div key={post.id} className="post-item"
                            onClick={() => setCurrentPostIndex(posts.indexOf(post))}
                        >
                            <h2 className="post-title">{post.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className = "main-section">
                    {posts[currentPostIndex].content}
            </div>
        </div>
    );
}

export default Posts;