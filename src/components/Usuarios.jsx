import React from 'react';

 

const Usuarios = () => {
let styles = {
    padding: '10px;',
  };

    return (

    	<div class="container">

	        <div className="jumbotron" align="center" style={styles}>
	            <h1 className="display-3">Agregar Usuario</h1>
	        </div>

	        <div class="col-md-6" class="container-fluid" >
		    	<form class="form-group">
		    		<h1>Nuevo usuario</h1>
		    		<div class="form-group" class="form-row">
		    			<div class="col-md-2 ">
				    		<input id="IdUsuario" type="text" class="form-control" placeholder="ID Usuario"/>
				    	</div>
				    </div>
				    <div class="row-md-3" class="form-row">
				    	<div class="col-md-4">
				    		<input id="Usuario" type="text" class="form-control" placeholder="Nombre Usuario"/>
				    	</div>
				  	</div>
                      <div class="row-md-3" class="form-row">
				    	<div class="col-md-4">
				    		<input id="identidad" type="number" max="13" class="form-control" placeholder="Identidad"/>
				    	</div>
				  	</div>
                      <div class="row-md-3" class="form-row">
				    	<div class="col-md-4">
				    		<input id="Password" type="password" class="form-control" placeholder="Password"/>
				    	</div>
                        </div>
                        <div class="row-md-3" class="form-row">
				    	<div class="col-md-4">
				    		<input id="NickName" type="text" class="form-control" placeholder="Nick Name"/>
				    	</div>
                        </div>
                        <div class="row-md-3" class="form-row">
				    	<div class="col-md-4">
				    		<input id="Creacion" type="date" class="form-control" placeholder="Fecha"  />
				    	</div>
				  	
				  	</div>
				  	
				  	<hr></hr>
				  	<button type="button" class="btn btn-primary">Guardar Datos</button>
	    		</form>
	    	</div>
		  </div>
    );
};

export default Usuarios;