<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Producto | Bombas</title>
	<?php $this->load->view('layout/header'); ?>
</head>
<body>
	<header class="mb-5"><?php $this->load->view('layout/menu'); ?></header>
	<main>
		<div class="">
			<h3 class="pt-3">Producto>Bombas</h3>
			<div id="resultadoBomba"></div>
		</div>
	</main>
	<footer><?php $this->load->view('layout/footer'); ?></footer>
</body>
</html>