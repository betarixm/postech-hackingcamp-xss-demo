import React from "react";
import {Post} from "../types";
import styles from "../styles/Viewer.module.css";

interface ViewerProps {
    post: Post
    onClose(): void
    hack(content: string): void
}

interface ViewerState {

}

declare global {
    interface Window {sendToHacker: any}
}

class Viewer extends React.Component<ViewerProps, ViewerState> {
    componentDidMount() {
        window.sendToHacker = (content: string) => {this.props.hack(content)}
    }

    render() {
        return (
            <div className={styles.box}>
                <div className={styles.button}>
                    <button onClick={this.props.onClose}>
                        <span className="material-icons">close</span>
                    </button>
                </div>
                <div className={styles.title}>
                    {this.props.post.title}
                </div>
                <iframe className={styles.content} srcDoc={"<style>body{margin: 0}</style><script>function sendToHacker(content) {parent.window.sendToHacker(content)}</script>" + this.props.post.content}/>

            </div>
        );
    }
}

export default Viewer;