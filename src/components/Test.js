import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import Welcomem from './mobile/Welcomem'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color:"transparent",
      },
      menuButton: {
        marginTop: theme.spacing(-1),
        marginRight: theme.spacing(0),
        marginLeft: 'auto',
  
      },
      toolbar: {
        minHeight: 128,
        alignItems: 'flex-end',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
      separator:{
        color:'white',
      },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      fontWeight: 'bold',
      color: 'black',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    banners:{
      color:'white',
  
    },
    text:{
      color:'black',
    }
  }));
  
  const Welcome = (props) => {
    const classes = useStyles();
        return(
            <div>
              <div id="barra_top"></div>
              <div id="banner_top">
		            <img src="https://www.uach.cl/uach/_file/5b1fe1c3b842c.jpg" width="1010" height="105" alt="" border="0" />
              </div>    
              <div id="scroll">
    
                <div id="contenedor">
        
                <div id="logo"><img src="https://www.uach.cl/uach/_imag/logo.jpg" border="0" alt="" style="margin-top: 21px;"/></div>
                <div id="menu_2">
 
                  <ul>
                    <li class="nivel1"><a href="https://www.uach.cl/" class="nivel1" style="  ">Inicio UACh</a>
                    </li>
                    <li class="nivel1"><a href="#" class="nivel1" style="  ">Facultades</a>
                      <ul>
                          <li ><a href="https://www.uach.cl/facultades/arquitectura-y-artes" style="padding-top: 10px;">Arquitectura y Artes</a></li>
                          <li ><a href="https://www.uach.cl/facultades/ciencias" style="">Ciencias</a></li>
                          <li ><a href="https://www.uach.cl/facultades/ciencias-agrarias-y-alimentarias" style="">Ciencias Agrarias y Alimentarias</a></li>
                          <li ><a href="https://www.uach.cl/facultades/cs-economicas-y-administrativas" style="">Cs. Económicas y Administrativas</a></li>
                          <li ><a href="https://www.uach.cl/facultades/cs-forestales-y-recursos-naturales" style="">Cs. Forestales y Recursos Naturales</a></li>
                          <li ><a href="https://www.uach.cl/facultades/ciencias-juridicas-y-sociales" style="">Ciencias Jurídicas y Sociales</a></li>
                          <li ><a href="https://www.uach.cl/facultades/ciencias-veterinarias" style="">Ciencias Veterinarias</a></li>
                          <li ><a href="https://www.uach.cl/facultades/ciencias-de-la-ingenieria" style="">Ciencias de la Ingeniería</a></li>
                          <li ><a href="https://www.uach.cl/facultades/filosofia-y-humanidades" style="">Filosofía y Humanidades</a></li>
                          <li ><a href="https://www.uach.cl/facultades/medicina" style=" padding-bottom: 20px; border-radius: 0 0 7px 7px; ">Medicina</a></li>
                      </ul>
                    </li>
                    <li class="nivel1"><a href="#" class="nivel1" style="  ">Sedes y Campus</a>
                      <ul>
                          <li ><a href="https://www.uach.cl/sedes-y-campus/informacion-general" style="padding-top: 10px;">Información General</a></li>
                          <li ><a href="https://www.uach.cl/sedes-y-campus/sede-puerto-montt" style="">Sede Puerto Montt</a></li>
                          <li ><a href="https://www.uach.cl/sedes-y-campus/campus-patagonia" style=" padding-bottom: 20px; border-radius: 0 0 7px 7px; ">Campus Patagonia</a></li>
                      </ul>
                    </li>
                    <li class="nivel1"><a href="https://www.uach.cl/pregrado/principal" class="nivel1" style="  ">Pregrado</a>
                    </li>
                    <li class="nivel1"><a href="https://www.uach.cl/postgrado/principal" class="nivel1" style="  ">Postgrado</a>
                    </li>
                    <li class="nivel1"><a href="#" class="nivel1" style=" color: #FFF; ">Organización</a>
                      <ul>
                          <li ><a href="https://www.uach.cl/organizacion/rectoria" style="padding-top: 10px;">Rectoría</a></li>
                          <li ><a href="https://www.uach.cl/organizacion/prorrectoria" style="">Prorrectoría</a></li>
                          <li ><a href="https://www.uach.cl/organizacion/cuerpos-colegiados" style="">Cuerpos Colegiados</a></li>
                          <li ><a href="https://www.uach.cl/organizacion/vicerrectoria-academica" style="">Vicerrectoría Académica</a></li>
                          <li ><a href="https://www.uach.cl/organizacion/vicerrectoria-sede-puerto-montt" style="">Vicerrectoría Sede Puerto Montt</a></li>
                          <li ><a href="https://www.uach.cl/organizacion/vicerrectoria-gestion-economica" style="">Vicerrectoría Gestión Económica</a></li>
                          <li style='height: 40px;'><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica" style="">Vicerrectoría Investigación Desarrollo<br></br> <span style="padding-left:28px;"></span>y Creación Artística</a></li>
                          <li ><a href="https://www.uach.cl/organizacion/secretaria-general" style="">Secretaría General</a></li>
                          <li ><a href="https://www.uach.cl/organizacion/asociaciones-gremiales" style=" padding-bottom: 20px; border-radius: 0 0 7px 7px; ">Asociaciones Gremiales</a></li>
                      </ul>
                    </li>
        <li class="nivel1"><a href="
		https://www.uach.cl/investigacion/principal" class="nivel1" style="  ">Investigación</a>
        </li>
        <li class="nivel1"><a href="
		https://www.uach.cl/vinculacion/principal" class="nivel1" style="  ">Vinculación</a>
        </li>
        <li class="nivel1"><a href="
		https://www.uach.cl/servicios/principal" class="nivel1" style="  ">Servicios</a>
        </li>
        <li class="nivel1"><a href="
		https://www.uach.cl/internacional/principal" class="nivel1" style="  border-bottom: none">Internacional</a>
        </li>
  </ul>
  
</div><div id="menu_3">
<a href="inicio-uach" style="color: #999;">Inicio UACh</a><img src="_imag/menu_f.jpg" border="0" alt="" style="margin: 0 13px;" />

<ul>      	
      <li class="nivel1">
      		<a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/presentacion"  style="color: #333; float: left;" >Presentación</a><img src="https://www.uach.cl/uach/_imag/pix_menu3.jpg" border="0" alt="" style="margin: 10px 13px 0 13px; float: left;" />      	
            	<ul>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/presentacion/presentacion" style=" ">Presentación</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/presentacion/mision" style=" ">Misión</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/presentacion/consejo-asesor" style=" ">Consejo Asesor</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/presentacion/comite-creacion-artistica" style=" ">Comité Creación Artística</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/presentacion/organigrama" style=" ">Organigrama</a></li>
              </ul>
    	</li>
      	
      <li class="nivel1">
      		<a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/departamentos" >Departamentos</a><img src="https://www.uach.cl/uach/_imag/pix_menu3.jpg" border="0" alt="" style="margin: 10px 13px 0 13px; float: left;" />      	
            	<ul>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/departamentos/investigacion" style="width: 243px; ">Investigación</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/departamentos/desarrollo-e-innovacion" style="width: 243px; ">Desarrollo e Innovación</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/departamentos/creacion-artistica" style="width: 243px; ">Creación Artística</a></li>
              </ul>
    	</li>
      	
      <li class="nivel1">
      		<a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion" >Oficinas de Gestión</a><img src="https://www.uach.cl/uach/_imag/pix_menu3.jpg" border="0" alt="" style="margin: 10px 13px 0 13px; float: left;" />      	
            	<ul>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion/comunicaciones" style=" width: 256px">Comunicaciones</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion/administracion-y-finanzas" style=" width: 256px">Administración y Finanzas</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion/gestion-de-proyectos-vidca" style=" width: 256px">Gestión de Proyectos VIDCA</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion/oficina-de-gestion-financiera-de-proyectos" style=" width: 256px">Oficina de Gestión Financiera de Proyectos</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion/oficina-de-transferencia-y-licenciamiento" style=" width: 256px">Oficina de Transferencia y Licenciamiento</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion/comite-propiedad-intelectual" style=" width: 256px">Comité Propiedad Intelectual</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/oficinas-de-gestion/comite-de-etica-bioetica" style=" width: 256px">Comité de Ética - Bioética</a></li>
              </ul>
    	</li>
      	
      <li class="nivel1">
      		<a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/unidades" >Unidades</a><img src="https://www.uach.cl/uach/_imag/pix_menu3.jpg" border="0" alt="" style="margin: 10px 13px 0 13px; float: left;" />      	
            	<ul>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/unidades/austral-omics" style=" ">AUSTRAL-omics</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/unidades/ume" style=" ">UME</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/unidades/ceam" style=" ">CEAM</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/unidades/programa-nucleos" style=" ">Programa Núcleos</a></li>
              </ul>
    	</li>
      	
      <li class="nivel1">
      		<a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/concursos-y-apoyos" >Concursos y Apoyos</a><img src="https://www.uach.cl/uach/_imag/pix_menu3.jpg" border="0" alt="" style="margin: 10px 13px 0 13px; float: left;" />      	
            	<ul>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/concursos-y-apoyos/convocatorias" style=" ">Convocatorias</a></li>
								<li><a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/concursos-y-apoyos/documentos-de-apoyo" style=" ">Documentos de Apoyo</a></li>
              </ul>
    	</li>
      	
      <li class="nivel1">
      		<a href="https://www.uach.cl/organizacion/vicerrectoria-investigacion-desarrollo-y-creacion-artistica/contacto" >Contacto</a>      	
    	</li>
			</ul>
  <img src="_imag/facebook.jpg" width="18" height="18" border="0" alt="" style="margin-left: 13px; margin-top: 6px; position: absolute;" /><img src="_imag/twitter.jpg" width="18" height="18" border="0" alt="" style="margin-right: 11px; margin-left: 7px; margin-top: 6px; position: absolute;" />
</div>
  
</div>
                            
              
            </div>
</div>
        );
    }


export default Welcome;