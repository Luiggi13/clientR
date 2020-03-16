import React, { useState, useEffect } from "react";

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb} = props;
    console.log(menu);
    return (
        <div>
            <h1>Menu web list</h1>
            {menu.map( item => {
                return (<div key={item._id}>
                    <p>{item.title}</p>
                    <p>{item.url}</p>
                    <p>{item.active}</p>
                    <p>{item.order}</p>
                    <hr/>
                </div>)
            })}
        </div>
    )
}