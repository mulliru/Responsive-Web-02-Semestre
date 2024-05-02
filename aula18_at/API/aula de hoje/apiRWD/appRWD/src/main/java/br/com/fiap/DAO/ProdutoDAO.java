package br.com.fiap.DAO;

import java.util.*;

import br.com.fiap.resource.ProdutoTO;

public class ProdutoDAO {

	public static List<ProdutoTO> produto;

	public ProdutoDAO() {

		if (produto == null) {
			produto = new ArrayList<ProdutoTO>();

			ProdutoTO pto1 = new ProdutoTO();
			pto1.setCodigo(1);
			pto1.setTitulo("Grampeador");
			pto1.setPreco(27.99);
			pto1.setQuantidade(10);

			produto.add(pto1);

			ProdutoTO pto2 = new ProdutoTO();
			pto2.setCodigo(2);
			pto2.setTitulo("Tesoura");
			pto2.setPreco(15.73);
			pto2.setQuantidade(12);
			produto.add(pto2);

			ProdutoTO pto3 = new ProdutoTO();
			pto3.setCodigo(3);
			pto3.setTitulo("Resma Papel");
			pto3.setPreco(29.98);
			pto3.setQuantidade(50);
			produto.add(pto3);

			ProdutoTO pto4 = new ProdutoTO();
			pto4.setCodigo(4);
			pto4.setTitulo("Cartucho tinta preta");
			pto4.setPreco(58.29);
			pto4.setQuantidade(20);
			produto.add(pto4);

			ProdutoTO pto5 = new ProdutoTO();
			pto5.setCodigo(5);
			pto5.setTitulo("Cartucho tinta colorida");
			pto5.setPreco(68.37);
			pto5.setQuantidade(10);
			produto.add(pto5);

		}
	}

	public List<ProdutoTO> select() {
		return produto;
	}

	public ProdutoTO select(int id) {
		for (int i = 0; i < produto.size(); i++) {
			if (produto.get(i).getCodigo() == id) {
				return produto.get(i);
			}
		}
		return null;
	}

	public boolean insert(ProdutoTO pto) {
		pto.setCodigo(produto.size() + 1);
		return produto.add(pto);
	}

	public void update(ProdutoTO pto) {
		ProdutoTO produto = select(pto.getCodigo());
		produto.setPreco(pto.getPreco());
		produto.setQuantidade(pto.getQuantidade());
		produto.setTitulo(pto.getTitulo());
	}
	
	public void delete(int id) {
		produto.remove(select(id));
	}



}