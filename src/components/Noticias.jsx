import React, {Component} from 'react';
import Noticia from './Noticia';

class Noticias extends Component{
    render(){
        return(
            <div className="row"> 
                {this.props.noticias.map(not=>(
                    <Noticia
                        key={not.url}
                        noticia={not}
                    />
                    ))
                }
            </div>
        )
    }

}

export default Noticias;