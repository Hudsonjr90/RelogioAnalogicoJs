import GlobalStyle from './styles/global'

import { AnalogClock } from './components/AnalogClock'
import { DigitalWatch } from './components/DigitalWatch'

export const App = () => {
    return (
        <div className="App">
            <GlobalStyle />

            <main>
                <AnalogClock />
                <DigitalWatch />
            </main>

            <footer>
                <p> H K - D E V &copy; 2023</p>
            </footer>
        </div>
    )
}
