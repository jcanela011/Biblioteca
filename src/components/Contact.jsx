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

	        <div class="col-md-6" >
		    	<form>
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
				    		<input id="idioma" type="dropdown" class="form-control" placeholder="Idioma"/>
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
				    		<input id="titulo" type="text" class="form-control" placeholder="Tipo"/>
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
				    		<input id="titulo" type="text" class="form-control" placeholder="Estado"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="subtitulo" type="text" class="form-control" placeholder="Cantidad"/>
				    	</div>
				    	<div class="form-group col">
				    		<input id="autor" type="text" class="form-control" placeholder="Fecha de Ingreso"/>
				    	</div>
				  	</div>
					<div class="form-group">
						<input type="email" placeholder="Correo..." class="form-control"/>
					</div>
					<div class="form-group">
						<textarea placeholder="Descripcion" class="form-control"></textarea>
					</div>
	    		</form>


	    	</div>

	    	<div class="container" align="center">
		    	
		    </div>
		  </div>
    );
};

export default Contact;