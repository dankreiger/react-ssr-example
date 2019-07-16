import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { UsersListPageProps } from './UsersListPage.types';
import { UsersReducerState } from '../../reducers/users.reducer.types';
import { Store } from 'redux';

const UsersListPage = ({ fetchUsers, users }: UsersListPageProps) => {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const renderUsers = (): JSX.Element[] => {
        return users.map(user => <li key={user.id}>{user.name}</li>);
    };

    return (
        <div>
            Here is a list of puppy users:
            <ul>{renderUsers()}</ul>
        </div>
    );
};

const mapStateToProps = (state: UsersReducerState) => ({
    users: state.users,
});

function loadData(store) {
    return store.dispatch(actions.fetchUsers());
}

export default {
    loadData,
    component: connect(
        mapStateToProps,
        actions,
    )(UsersListPage),
};
