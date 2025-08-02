import { useState } from 'react';
import LoadingPage from './components/LoadingPage';
import Team from './components/Team';
import RippleEffect from './components/RippleEffect';
import InfiniteMarquee from './components/InfiniteMarquee';
import './App.css';
import Page1 from './components/Page1';
import ChallengCards from './components/ChallengCards';
import SkillTreeHeader from './components/SkillTreeHeader';

const completions = [
	{
		name: 'Ayaan',
		username: 'ayaan',
		message: "I've never seen anything like this before. It's amazing.",
	},
	{
		name: 'Sarah',
		username: 'sarah',
		message: 'Just completed Python Basics! The XP system is so motivating.',
	},
	{
		name: 'Mike',
		username: 'mike',
		message: 'Finished my first coding challenge. Really liked it!',
	},
	{
		name: 'John',
		username: 'John',
		message: 'This platform is incredible!',
	},
	{
		name: 'Alex',
		username: 'alex',
		message: 'The experience of using it was wholesome',
	},
	{
		name: 'David',
		username: 'david',
		message: 'Good learning experience!',
	},
];

function App() {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoaded = () => {
		setIsLoading(false);
	};

	return (
		<div className="App">
			{isLoading ? (
				<LoadingPage onLoaded={handleLoaded} />
			) : (
				<>
					<RippleEffect />
					<main className="main-content">
						<SkillTreeHeader />
						<ChallengCards />
						<Page1 />
						<InfiniteMarquee items={completions} />
					</main>
					<footer className="footer">
						<Team />
					</footer>
				</>
			)}
		</div>
	);
}

export default App;