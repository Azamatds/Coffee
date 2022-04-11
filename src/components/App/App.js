import './App.css';
import HeaderContent from "../Header-Content/header-Content";
import AboutOur from "../About-Our/about-our";
import SearchFilter from "../Search-Filter/search-filter";
import CoffeeProduct from "../Coffee-Product/coffee-product";
import FooterTop from "../Footer-Top/footer-top";

import {Component} from "react";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data : [
                {name : 'Brazil' , id:1},
                {name : 'Kenya' , id:2},
                {name : 'Columbia' , id:3},
                {name : 'Brazil' , id:4},
                {name : 'Columbia' , id:5},
                {name : 'Kenya' , id:6},

            ],
            term : '',
            filter : ''

        }

    }
    deleteItem = (id) =>{
       this.setState(({data}) =>{
           const index = data.findIndex(elem => elem.id === id);
           const before = data.slice(0,index);
           const after = data.slice(index+1);
           const newArray = [...before , ...after];
           return{
               data : newArray
           }

       })
    }

    searchCoffee = (items,term) =>{
        if(term.length === 0){
            return items;
        }
        return items.filter(item =>{
            if(item.name.indexOf(term)>-1){
                return item.name;
            }
        });

    }

    onUpdateSearch = (term) =>{
        this.setState({term});
    }

    filterPost = (items,filter) =>{
        switch (filter){
            case 'Brazil':
                return items.filter(item => item.name === 'Brazil')
            case 'Kenya':
                return  items.filter(item => item.name === 'Kenya');
            case 'Columbia':
                return  items.filter(item => item.name === 'Columbia');
            default :
                return items;
        }
    }

    onFilterSelect = (filter)=>{
        this.setState({filter})
    }


    render() {
        const {data,term,filter} = this.state;
        const visibleData = this.filterPost(this.searchCoffee(data,term),filter)

        return (
            <div className="App">
                <HeaderContent/>
                <AboutOur/>
                <SearchFilter onUpdateSearch = {this.onUpdateSearch}
                              filter = {filter}
                              onFilterSelect = {this.onFilterSelect}
                />

                <div className='product-list'>
                    <CoffeeProduct
                        data = {visibleData}
                        onDelete = {this.deleteItem}
                    />
                </div>

                <FooterTop/>
            </div>
        );
    }


}

export default App;
