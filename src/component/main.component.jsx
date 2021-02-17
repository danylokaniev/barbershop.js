import React, { useState, useCallback } from "react";
import s from "./main.component.m.css";

function MyComponent() {
	const [name, setState] = useState("123456");
	const handleCahnge = useCallback(e => setState(e.target.value));
	return (
		<>
			<div className="body">dsfsdf</div>
			<div className={s.intro}>{name}</div>
			<input value={name} onChange={handleCahnge} />
			<div>dsfsdf</div>
			<div>dsfsdf</div>
			<div>dsfsdf</div>
			<div>dsfsdf</div>
			<div>dsfsdf</div>
			<div>dsfsdf</div>
		</>
	);
}

export default MyComponent;