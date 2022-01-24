import React from "react";
import styles from "../styles/Board.module.css";

interface DashboardProps {
    hacked: string[]
}

interface DashboardState {

}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    render = () => {
        return (
            <div>
                <h1 className={`${styles.title} ${styles.dark}`}>Result</h1>
                <div className={styles.box}>
                    {this.props.hacked.map((h, index) => {
                        return (
                            <div key={index} className={styles.row}>{h}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Dashboard