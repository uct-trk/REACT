import React from 'react';

class SearchBar extends React.Component{


    state = {
        searchQuery: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault(); // varsayılan davranışını durdurduk enter a basınca sayfa yenılenıyordu
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 mt-5">
                    <div className="col-10">
                        <input 

                            type="text" 
                            className="form-control" 
                            placeholder="SEARCH MOVIE" 
                            onChange={this.props.searchMovieProp} //buraya tıklandığında App SearchBardaki
                            >
                            
                        </input>
                    </div>
                    <div className="col-2">
                        <button 
                            type="button" 
                            className="btn btn-md btn-danger" 
                            style={{float:'right'}}>
                                ADD MOVIE
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar