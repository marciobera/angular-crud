angular.module('meuApp', []).controller("cadastroController", function($scope){
	$scope.nomeApp = "MEAN Application";
	$scope.showForm = false;
	$scope.checkedAll = false;
	$scope.contaItens = 0;
	$scope.cadastros = [
		{nome: "Pedro Barros", email: "pedrobarros@gmail.com", sexo: "M", ativo: true},
		{nome: "Ana Barros", email: "ana@gmail.com", sexo: "F", ativo: false},
		{nome: "Carlos Barros", email: "carlos@gmail.com", sexo: "M", ativo: true}
	];

	$scope.adicionarCliente = function (cadastro) {
		$scope.cadastros.push(cadastro);
		delete $scope.cadastro;
		$scope.showForm = false;
		$scope.cadastroForm.$setPristine();
	};

	$scope.cancelarCliente = function (cadastro) {
		delete $scope.cadastro;
		$scope.showForm = false;
		$scope.cadastroForm.$setPristine();
	};
	
	$scope.apagarClientes = function (cadastros) {
		$scope.cadastros = cadastros.filter(function (cadastro) {
			if (!cadastro.warning) return cadastro;
		});
		if($scope.cadastros.length == 0){
			$scope.checkedAll = false;
		}
	};
	$scope.editarCliente = function () {
		$scope.showForm = true;
		$scope.cadastros.filter(function(cliente){
			if(cliente.warning){
				$scope.cadastro = cliente;
				console.log($scope.cadastro);
			}
		});


	};
	$scope.isCadastroSelecionado = function(cadastros){
		return cadastros.some(function(cadastro){
			return cadastro.warning;
		});

	};
	$scope.selecionarTudo = function(tipo){
		$scope.cadastros.filter(function(cadastro){
			return cadastro.warning = tipo;
		});
	};
	$scope.change = function(value){
		if(value == false){
			$scope.checkedAll = false;
		}
		$scope.contaItens = $scope.cadastros.filter(function (cadastro) {
			if (cadastro.warning) return true;
		}).length;
	};
	
});