import React from 'react'; 
import MonsterCard from './MonsterCard';
import { ContainerHeader, Container, StyledBtn } from './styledComponents';

// Other lifecycle ideas
// unMount for vanquished beasts 
// unMount will also alert and say you killed the monster 

// 1. move to last page when new monster added


// 2. unMount behavior for vanquishing monster successfully 


class MonsterContainer extends React.Component{

    state = {
        startIndex: 0 
    }

    renderMonsters = () => {   
        return this.props.monsters
                .slice(this.state.startIndex, this.state.startIndex + 5)
                .map((monster, ind) => <MonsterCard key={ind} {...monster} handleClick={this.props.addMonsterToCampaign}/>)
    }

    changeIndex = (num)  => {
        this.setState({ startIndex: this.state.startIndex + num })
    }

    render(){
        const { startIndex } = this.state; 
        const { monsters } = this.props;
        
        return (
            <Container half>
                <ContainerHeader>Most Wanted</ContainerHeader>
                { this.renderMonsters() }
                <div>
                    {!!startIndex && !!monsters.length && <StyledBtn onClick={() => this.changeIndex(-5)}>Previous</StyledBtn>}
                    {monsters.length - startIndex > 5 && <StyledBtn onClick={() => this.changeIndex(5)}>Next</StyledBtn>}
                </div>
            </Container>
        )
    }

}

export default MonsterContainer; 
