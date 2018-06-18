import React from 'react';

 

const Categoria = () => {
let styles = {
    padding: '10px;',
  };

    return (

    	<div class="container">

	        <div className="jumbotron" align="center" style={styles}>
	            <h1 className="display-3">Agregar Categoria</h1>
	        </div>

	        <div class="col-md-6" class="container-fluid" >
		    	<form class="form-group">
		    		<h1>Nueva Categoria</h1>
		    		<div class="form-group" class="form-row">
		    			<div class="col-md-2 ">
				    		<input id="IdCategoria" type="text" class="form-control" placeholder="ID Categoria"/>
				    	</div>
				    </div>
				    <div class="row-md-3" class="form-row">
				    	<div class="col-md-4">
				    		<input id="Categoria" type="text" class="form-control" placeholder="Categoria"/>
				    	</div>
				  	</div>
				  	<hr></hr>
				  	<button type="button" class="btn btn-primary">Guardar Datos</button>
	    		</form>
	    	</div>
		  </div>
    );
};

export default Categoria;