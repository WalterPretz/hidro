<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Producto_model extends CI_Model {

//Constructor
	function __construct(){
		parent::__construct();
		$this->load->database();
	}

	function listarProductoRegistradoSistema(){
		$sql = "SELECT 	a.id_producto as id, a.cod_prod as id_en, codigo, CONCAT(a.nombre,' ',a.descripcion) as producto, DATE_FORMAT(a.fecha_registro, '%d/%m/%Y %h:%m:%s %p') as fecha_registro, a.precio_venta, a.stock, b.descripcion, a.imagen		
		FROM 	producto a
		JOIN    categoria b on a.cat_id_categoria = b.id_categoria
		WHERE  	a.stado = 'A'
		ORDER BY a.id_producto DESC
		LIMIT 	1000";

		$dbres = $this->db->query($sql);
		$rows = $dbres->result_array();
		return $rows;
	}

}