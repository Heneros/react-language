import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext  from '../contexts/ColorContext';


class App extends React.Component{
   static contextType = LanguageContext;
    state = { language: 'russian'};

    onLanguageChange = language =>{
        this.setState({ language });
    }

    render(){
        const text = this.context === 'russian' ? 'Выберете язык' : ' Select a language';        
        return <div className='ui container'>
            <div>
                {text}:
                <i className='flag us' onClick={() => this.onLanguageChange('english')}/>
                <i className='flag ru'  onClick={() => this.onLanguageChange('russian')}/>
            </div>
            <ColorContext.Provider value="red">
            <LanguageContext.Provider
            value={this.state.language}>
            <UserCreate />
            </LanguageContext.Provider>
            </ColorContext.Provider>
        </div>
    }
}

export default App;