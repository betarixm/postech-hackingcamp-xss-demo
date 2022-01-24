import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Board from "../components/Board";
import {Post} from "../types";
import Upload from "../components/Upload";
import Dashboard from "../components/Dashboard";
import Page from "../components/Page";

interface HomeProps {

}

interface HomeState {
    posts: Post[]
    hacked: string[]
}

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {
        posts: [{title: "Sample Post", content: "This is sample post :)"}],
        hacked: []
    }

    componentDidMount() {
        document.cookie = "session=this-is-super-secret"
    }

    addPostHandler = (post: Post) => {
        this.setState({posts: [...this.state.posts, post]});
    }

    hackHandler = (content: string) => {
        this.setState({hacked: [...this.state.hacked, content]});
    }

    render = () => {
        return (
            <div className={styles.container}>
                <Head>
                    <title>PLUS</title>
                    <meta name={"viewport"} content={"width=1920px; height:1080px; user-scalable=no"}/>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                          rel="stylesheet" />
                </Head>

                <Page dark={true} url={"https://hacker.com/"}>
                    <Dashboard hacked={this.state.hacked} />
                </Page>

                <Page dark={false} url={"https://plusbank.co.kr/board/upload/"}>
                    <Upload onUploadPost={this.addPostHandler}/>
                </Page>

                <Page dark={false} url={"https://plusbank.co.kr/board/"}>
                    <Board posts={this.state.posts} hack={this.hackHandler}/>
                </Page>
            </div>
        )
    }
}

export default Home
