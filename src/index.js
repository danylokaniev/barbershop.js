import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'

const App = lazy(() => import('./pages/App.jsx'))
ReactDOM.render(
	<Suspense fallback={<p>loading....</p>}>
		<App />
	</Suspense>,
	document.querySelector('#root')
)
