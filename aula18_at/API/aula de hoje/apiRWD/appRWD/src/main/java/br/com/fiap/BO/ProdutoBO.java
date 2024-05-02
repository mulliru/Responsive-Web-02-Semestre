package br.com.fiap.BO;

import java.util.List;

import br.com.fiap.DAO.ProdutoDAO;
import br.com.fiap.resource.ProdutoTO;

public class ProdutoBO {

	private ProdutoDAO pd;

	public List<ProdutoTO> listar() {
		pd = new ProdutoDAO();
		return pd.select();
	}

	public ProdutoTO listar(int id) {
		pd = new ProdutoDAO();
		return pd.select(id);
	}
	
	public boolean cadastrar(ProdutoTO pto) {
		pd = new ProdutoDAO();
		return pd.insert(pto);
	}
	public void atualiza(ProdutoTO pto) {
		pd = new ProdutoDAO();
		pd.update(pto);
	}
	
	public void remover(int id) {
		pd = new ProdutoDAO();
		pd.delete(id);
	}






}
