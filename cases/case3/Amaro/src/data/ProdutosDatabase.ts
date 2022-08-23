import { produto } from "../model/produto";
import { BaseDatabase } from "./BaseDatabase";

export class ProdutosDatabase extends BaseDatabase {
  private static PRODUTOS = "PRODUTOS";
  public adicionarProduto = async (produto: produto) => {
    try {
      await this.getConnection()
        .insert({
          id: produto.id,
          nome: produto.nome,
          marca: produto.marca,
          preco_compra: produto.preco_compra,
          preco_venda: produto.preco_venda,
        })
        .into(ProdutosDatabase.PRODUTOS);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  public ListarTodosProdutos = async (config: any, produto: produto) => {
    try {
      const result = await this.getConnection().raw(` select
      p.NOME as PRODUTO,
      GROUP_CONCAT(DISTINCT c.TAG) as CATEGORIAS
    from PRODUTOS p 
    LEFT JOIN CATEGORIAS c 
      ON p.id = c.produto_id 
    group by p.NOME`);

      return { Produtos: result };
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public PesquisaProdutos = async (config: any, produto: produto) => {
    try {
      const result = await this.getConnection()
        .select(
          "PRODUTO.nome as Produto",
          "GROUP_CONCAT(`CATEGORIAS.TAG`, ',') as CATEGORIAS"
        )
        .leftJoin("CATEGORIAS", "PRODUTO.id", "CATEGORIAS.produto_id")
        .groupBy("PRODUTO.nome")
        .from(ProdutosDatabase.PRODUTOS);
      const newResult = result.map((itens: { TAG: any; }) => {
        console.log(itens.TAG);
      });

      return { Produtos: result };
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
