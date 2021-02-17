import React, { useState, useCallback } from "react";
import s from "./app.component.m.css";
import Main from './main.component'

function MyComponent() {
	const [name, setState] = useState("123456");
	const handleCahnge = useCallback(e => setState(e.target.value));
	return (
		<>
			<div className="body">dsfsdf</div>
			<div className={s.intro}>{name}</div>
			<input value={name} onChange={handleCahnge} />
			<Main />
		</>
	);
}

export default MyComponent;