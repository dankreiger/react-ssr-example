export interface User {
    id: number;
    name: string;
}

export interface UsersListPageProps {
    fetchUsers: () => void;
    users: User[];
}
