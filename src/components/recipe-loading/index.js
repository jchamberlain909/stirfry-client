import React, {Component} from 'react';

class RecipeLoading extends Component {
    
    componentDidMount(){
        setTimeout(() => {
            this.chooseIngredients()
        }, 3);
    }

    chooseIngredients = () => {

    }



    render() { 
        return ( <div>
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
                </div> );
    }
}
 
export default RecipeLoading;

