import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import ColorContext  from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component{

    render(){
        // const text = this.context === 'russian' ? 'Выберете язык' : ' Select a language';        
        return <div className='ui container'>
            <LanguageStore>
            <LanguageSelector />
            <ColorContext.Provider value="red">
            <UserCreate />
            </ColorContext.Provider>
            </LanguageStore>
        </div>
    }
}

export default App;