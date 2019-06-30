import React from "react"
import Card from '../card/Card'
import Detail from '../detail/Detail'
import Pages from '../pagination/Pages'
import ACTIONS from "../../modules/action";
import { connect } from "react-redux";

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            showCharacterDetail: false,
            characterDetail: Number,
            characters: [],
            info: [],
            currentPage: 1
        }
        this.handleClick = this.handleClick.bind(this)
        this.loadPage = this.loadPage.bind(this)
        this.handleLike = this.handleLike.bind(this)
    }

    componentDidMount() {
        // get first api page
        this.loadPage(1)
    }

    // calling api with passed page number
    loadPage(pageNum) {
        let pageStr = "https://rickandmortyapi.com/api/character/?page=" + pageNum;
        fetch(pageStr)
        .then(res => res.json())
        .then((data) => {
            let details = [];
            for (let i in data.results) {
                details.push(data.results[i])
            }
            this.setState({ characters: details, info: data.info, currentPage: pageNum, showCharacterDetail: false })
        })
        .catch(console.log)
    }

    // display/hide clicked character detail component 
    handleClick(characterID) {
        this.setState(prevState => {
            return {
                showCharacterDetail: !prevState.showCharacterDetail,
                characterDetail: characterID
            }
        })
    }

    // like/unlike character
    handleLike = event => {
        if (this.props.liked.includes(event.target.value)) {
            this.props.unlikeCharacter(event.target.value)
        } else {
            this.props.likeCharacter(event.target.value)
        }
    };

    render() {
        return (
            <div>
                {/* create grid with character cards */}
                <Card characters={this.state.characters} handleClick={this.handleClick} handleLike={this.handleLike} liked={this.props.liked}/>
                {/* create pagination */}
                <Pages info={this.state.info} loadPage={this.loadPage} currentPage={this.state.currentPage}/>
                {/* show/hide detail component depending on state(if we need it) */}
                {this.state.showCharacterDetail ? <Detail character={this.state.characters.find(lik => lik.id === this.state.characterDetail)} handleClick={this.handleClick}/> : null}
            </div>
        )
    }
}


const mapStateToProps = state => ({
  liked: state.liked
});

const mapDispatchToProps = dispatch => ({
  likeCharacter: id => dispatch(ACTIONS.likeCharacter(id)),
  unlikeCharacter: id => dispatch(ACTIONS.unlikeCharacter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);