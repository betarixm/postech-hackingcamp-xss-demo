import React from "react";
import {Post} from "../types";
import styles from "../styles/Upload.module.css";

interface UploadProp {
    onUploadPost(post: Post): void;
}

interface UploadState {
    title: string;
    content: string;
}

class Upload extends React.Component<UploadProp, UploadState> {
    defaultState: UploadState = {
        title: "", content: ""
    }

    state: UploadState = this.defaultState;

    onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(this.state.content !== "" && this.state.title !== "") {
            this.props.onUploadPost(this.state);
            // this.setState(this.defaultState);
        }
    }

    onTitleUpdateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.target.value
        });
    }

    onContentUpdateHandler = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        this.setState({
            content: e.target.value
        });
    }

    render = () => {
        return (
            <div>
                <h1 className={styles.title}>Post</h1>
                <div className={styles.box}>
                    <input placeholder={"Title..."} className={styles.title} type={"text"} onChange={this.onTitleUpdateHandler} value={this.state.title}/>
                    <textarea placeholder={"Content..."} className={styles.content} onChange={this.onContentUpdateHandler} value={this.state.content}/>
                    <button onClick={this.onClickHandler}>Upload</button>
                </div>
            </div>
        )
    }
}

export default Upload;
