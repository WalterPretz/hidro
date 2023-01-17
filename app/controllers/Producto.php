<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Producto extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->helper('form');
		$this->load->library('session');
		$this->load->helper('url');
		$this->load->model('producto_model');
	}


	private function restringirAcceso() {
		if (!isset($this->session->USUARIO)) {
			redirect("usuario");
		}
	}
	public function index()	{
		$data['base_url'] = $this->config->item('base_url');
		
	}

	function bombas(){
		$data['base_url'] = $this->config->item('base_url');
		$this->load->view('producto/bomba', $data);
	}

	function traerData(){
		$data['base_url'] = $this->config->item('base_url');

		$data['arr'] = $this->Producto_model->listarProductoRegistradoSistema();
		
		$tabla = '';
		$arrayData = array();
		$tabla.='
		<div class="table-responsive">
		<table class="table table-sm table-striped table-hover table-bordered">
		<thead class="table-dark">
		<tr>
		<th class="text-center" >Cód</th>
		<th>Nombre | Descripción</th>
		<th>Fecha registro</th>
		<th class="text-center">Precio</th>
		<th class="text-center" >Stock</th>
		<th class="text-center" >Editar</th>
		</tr>
		</thead>
		<tbody>';
		foreach ($data['arr'] as $a){
			$tabla.='
			<tr>
			<td class="text-center" >'.$a['codigo'].'</td>
			<td>'.$a['producto'].'</td>
			<td>'.$a['fecha_registro'].'</td>
			<td class="text-center">Q. '.$a['precio_venta'].'</td>
			<td class="text-center fw-bold" >'.$a['stock'].'</td>
			<td class="text-center" ><a href="producto/editar/'.$a['id_en'].'" class="btn btn-primary btn-sm"><i class="fa-solid fa-sliders"></i> Editar</a></td>
			</tr>';
		}
		$tabla.='
		</tbody>
		</table>
		</div>
		';

		$arrayData['resultado'] = $tabla;
		echo $arrayData;
	}

	function consumirApi(){
		url=svn_fs_abort_txn(txn)
		$resultado = xmsl resultado

		$data['arr'] = $this->Producto_model->listarProductoRegistradoSistema();

		cabeceza =
		echo mostrar;
	}


function datos a enviar
$varnit = $_POST['variable'] = 1
	$nit= "";
	$batos =.'<xml>nit:'.$varnit.'<7'

}
