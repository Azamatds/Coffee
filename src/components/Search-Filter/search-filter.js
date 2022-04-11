import {Component} from "react";

import './search-filter.css';

class SearchFilter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term : '',
            filter : ''
        }
    }

    onUpdateSearch = (e) =>{
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }


    buttonsData = [
        {name: 'all',label: 'All Products'},
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}

    ]

    buttons = this.buttonsData.map(({name,label}) =>{
        const active = this.props.filter === name;
        const clazz = active ?'btn-light':'btn-black';
        return(
            <button type='button'
                    key={name}
                    className={`btn ${clazz}`}
                    onClick={() => this.props.onFilterSelect(name)}>
                {label}

            </button>
        )
    })
   render() {
       return(
           <section className='section_3'>
               <div className='section_content'>
                   <nav className='search'>
                       <div className='search_txt'>Lookiing for</div>
                       <div>
                           <input type="text"
                                  placeholder='start typing here...'
                                  value={this.state.term}
                                  onChange={this.onUpdateSearch}
                           />
                       </div>

                   </nav>

                   <nav className='filter'>
                       <div>Or filter</div>
                       {this.buttons}

                   </nav>
               </div>
           </section>
       )
   }
}

export default SearchFilter;