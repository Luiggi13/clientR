import React from 'react';

import "./EditUserForm.scss";

export default function EditUserForm(props) {
    const {user} = props;

    return (
        <div>
            <h1>Editando formulario</h1>
            <h2>{user.email}</h2>
        </div>
    )
}