import React from "react";
import {Post} from "../types";
import Viewer from "./Viewer";
import styles from "../styles/Board.module.css";

interface BoardProps {
    posts: Post[]
    hack(content: string): void
}

interface BoardState {
    post: Post | null
}

class Board extends React.Component<BoardProps, BoardState> {

    state: BoardState = {
        post: null,
    };

    onClickHandler = (post: Post) => {
        this.setState({post: post});
    }

    onCloseHandler = () => {
        this.setState({post: null});
    }

    render = () => {
        return (
            <>
                {this.state.post !== null ? (<Viewer onClose={this.onCloseHandler} post={this.state.post} hack={this.props.hack}/>): ""}
                <div className={this.state.post !== null ? styles.blur : ""}>
                    <h1 className={styles.title}>Board</h1>
                    <div className={styles.box}>
                        {this.props.posts.map((post, index) => {
                            return (
                                <div key={index} className={styles.row} onClick={() => {this.onClickHandler(post)}}>
                                    {post.title}
                                </div>)
                        })}
                    </div>
                </div>
            </>

        )
    }
}

export default Board;