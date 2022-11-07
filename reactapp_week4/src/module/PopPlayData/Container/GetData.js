import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onGetPlayers } from '../../../action';


class GetData extends Component {

    componentDidMount = () => {
        this.props.onGetPosts();
    }

    render() {
        const postList = this.props.popplayers.length ? (this.props.popplayers.map(info => {
            return (
                <>
                <React.Fragment> 
                <ul>
                    <li>
                    Player ID: {info.id}
                    <br></br>
                    Name: {info.name}
                    <br></br>
                    Email: {info.email}
                    <br></br>
                    Phone Number:{info.phone}
                    </li>
                </ul>
                </React.Fragment>
                </>
            )
        })) : ('')

        return (
            <div>
                {postList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        popplayers: state.popplayers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPosts: () => dispatch(onGetPlayers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetData);