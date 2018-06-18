import React from 'react';

 

const Contact = () => {
let styles = {
    padding: '10px;',
  };

    return (

    	<div class="container">

	        <div className="jumbotron" align="center" style={styles}>
	            <h1 className="display-3">Registrar Libro</h1>
	        </div>

	        <div class="col-md-6" class="container-fluid" >
		    	<form class="form-group">
		    		<h1>Datos</h1>
		    		<div class="row" class="form-row">
		    			<div class="form-group col">
				    		<input id="isbn" type="text" class="form-control" placeholder="ISBN"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="editorial" type="text" class="form-control" placeholder="Editorial"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="anio" type="text" class="form-control" placeholder="Año"/>
				    	</div>
						
						<div class="form-group col">
				    		<select id="inputState" class="form-control">
						        <option selected>Seleccionar...</option>
						        <option>...</option>
						      </select>
				    	</div>
				    </div>
				    <div class="row" class="form-row">
				    	<div class="form-group col">
				    		<input id="titulo" type="text" class="form-control" placeholder="Titulo"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="subtitulo" type="text" class="form-control" placeholder="Subtitulo"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="autor" type="text" class="form-control" placeholder="Autor"/>
				    	</div>
				  	</div>
				  	<div class="row" class="form-row">
				    	<div class="form-group col">
				    		<select id="inputState" class="form-control">
						        <option selected>Seleccionar...</option>
						        <option>...</option>
						      </select>
				    	</div>
				    	<div class="form-group col">
				    		<input id="subtitulo" type="text" class="form-control" placeholder="Num. Paginas"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="autor" type="text" class="form-control" placeholder="Estante"/>
				    	</div>
				  	</div>
				  	<div class="row" class="form-row">
				    	<div class="form-group col">
				    		<input id="titulo" type="text" class="form-control" placeholder="Lugar"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="subtitulo" type="text" class="form-control" placeholder="Fecha"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="autor" type="text" class="form-control" placeholder="Codigo"/>
				    	</div>
				  	</div>
					<div class="row" class="form-row">
				    	<div class="form-group col">
				    		<select id="inputState" class="form-control">
						        <option selected>Seleccionar...</option>
						        <option>...</option>
						      </select>
				    	</div>
				    	<div class="form-group col">
				    		<input id="subtitulo" type="text" class="form-control" placeholder="Cantidad"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="autor" type="text" class="form-control" placeholder="Fecha de Ingreso"/>
				    	</div>
				  	</div>
				  	<hr></hr>
				  	<button type="submit" class="btn btn-primary">Guardar Datos</button>
	    		</form>


	    	</div>

	    	<div class="container" align="center">
		    	
		    </div>
		  </div>
    );
};

export default Contact;