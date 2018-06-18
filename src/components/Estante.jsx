import React from 'react';

 

const Estante = () => {
let styles = {
    padding: '10px;',
  };

    return (

    	<div class="container">

	        <div className="jumbotron" align="center" style={styles}>
	            <h1 className="display-3">Agregar Estante</h1>
	        </div>

	        <div class="col-md-6" class="container-fluid" >
		    	<form class="form-group">
		    		<h1>Nueva Estante</h1>
		    		<div class="form-group" class="form-row">
		    			<div class="col-md-2 ">
				    		<input id="IdEstante" type="text" class="form-control" placeholder="ID Estante"/>
				    	</div>
				    </div>
				    <div class="row-md-3" class="form-row">
				    	<div class="col-md-4">
				    		<input id="Estante" type="text" class="form-control" placeholder="Estante"/>
				    	</div>
				  	</div>
                        <div class="row-md-2" class="form-row">
                            <div class="col-md-4">
                                <select id="inputState" class="form-control">
						            <option selected>Libro</option>
						        </select>
                            </div>
				        </div>
				  	<hr></hr>
				  	<button type="button" class="btn btn-primary">Guardar Datos</button>
	    		</form>
	    	</div>
		  </div>
    );
};

export default Estante;