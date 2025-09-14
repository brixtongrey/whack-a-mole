

function ScorePanel() {
    return (
       <>
       <div className="scoreboard">
        <div className="chip">
            Score <strong>11</strong>
        </div>
        <div className="chip">
            Time <strong>10</strong>
        </div>
        <button className="btn btn-secondary">Restart</button>
       </div>
       </> 
    );
}

export default ScorePanel;
