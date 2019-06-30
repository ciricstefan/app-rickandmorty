import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper'
import './Card.css'

class Card extends React.Component {

    render() {
    
        return (
            // create grid
            <Grid container className="root">
                {/* go over every character in current api call and create card for it */}
                {this.props.characters.map((character) => (
                    <Grid key={character.id} item xs={12} sm={6} lg={3}>
                        {/* if character is liked use additional styling */}
                        <Paper className={this.props.liked.includes(""+character.id) ? "paper show" : "paper"}>
                            <div onClick={() => this.props.handleClick(character.id)}>
                                <h4>{character.name}</h4>
                                <img src={character.image} alt={character.name}/>
                            </div>
                            <div>
                                <button className={this.props.liked.includes(""+character.id) ? "btn btn-danger" : "btn btn-success"} onClick={this.props.handleLike} value={character.id}>{this.props.liked.includes(""+character.id) ? "UNLIKE ME" : "LIKE ME"}</button>
                                <button className="btn btn-secondary" onClick={() => this.props.handleClick(character.id)}>MORE INFO</button>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default Card