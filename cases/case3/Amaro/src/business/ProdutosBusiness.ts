import { IdGenerator } from "../services/IdGenerator";
import { ProdutosDatabase } from "../data/ProdutosDatabase";
import { produto, produtoInputDTO } from "../model/produto";

const idGenerator = new IdGenerator();

export class ProdutosBusiness {
  public adicionarProduto = async (input: produtoInputDTO) => {
    try {
      const { nome, marca, preco_compra, icms, lucro } = input;

      const calculoPrecoCustoEVenda = (
        preco_compra: any,
        icms: any,
        lucro: any
      ) => {
        let preco_custo: number = (icms / 100) * preco_compra + preco_compra;

        let precoVenda: number = (lucro / 100) * preco_custo + preco_custo;

        return precoVenda;
      };

      const preco_venda: number = calculoPrecoCustoEVenda(
        input.preco_compra,
        input.icms,
        input.lucro
      );

      const id: string = idGenerator.generate();

      const produtosDatabase = new ProdutosDatabase();
      const produto: produto = {
        id,
        nome,
        marca,
        preco_compra,
        icms,
        lucro,
        preco_venda,
      };

      await produtosDatabase.adicionarProduto({
        id,
        nome,
        marca,
        preco_compra,
        icms,
        lucro,
        preco_venda,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public ListarTodosProdutos = async (produto: produto) => {
    try {
      return await new ProdutosDatabase().ListarTodosProdutos(produto, produto);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public PesquisaProdutos = async (produto: produto) => {
    try {
      return await new ProdutosDatabase().PesquisaProdutos(produto, produto);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
