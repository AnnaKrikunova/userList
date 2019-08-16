import React from 'react';
import Header from '../UsersList/Header/Header'
import UserItem from '../UsersList/UserItem/UserItem'
import usersList from '../../constants/users'

class UsersList extends React.Component {

    state = {
        users: usersList
    };

    handleClick = (index) => {
        this.setState(prevState => {
            const users = prevState.users.map(user => user);
            users[index].isSelected = !users[index].isSelected;
            return users;
        });
    };


    render () {
        return (
            <div>
                <Header userList={this.state.users} onClickHandler={this.handleClick}/>
                <div>
                    {this.state.users.map((user, index) =>
                        <UserItem key={index} data={index} name={user.name} level={user.level}
                                  isSelected={user.isSelected}
                                  image={user.image} onClickHandler={this.handleClick}/>)}
                </div>
            </div>
        )
    }
}

export default UsersList;