import React from "react";

import styles from "../styles/Page.module.css";

interface PageProps {
    url: string
    dark: boolean
}

interface PageState {

}

class Page extends React.Component<PageProps, PageState> {
    render = () => {
        return (
            <div className={`${styles.page} ${this.props.dark ? styles.dark : ""}`}>
                <div className={styles.header}>
                    <div className={styles.url}>
                        {this.props.url}
                    </div>
                </div>
                <div className={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Page;