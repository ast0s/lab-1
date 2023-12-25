import React from 'react';

const UserCard = ({avatar_url, name, ...props}) => {
    return (
        <div className="border-2 border-black border-solid rounded box-border break-after-all w-52 mx-auto">
            <img className="w-52 h-52" src={avatar_url} alt="avatar"/>
            <h2 className="text-3xl w-52">{name}</h2>
        </div>
    );
}

export default UserCard;