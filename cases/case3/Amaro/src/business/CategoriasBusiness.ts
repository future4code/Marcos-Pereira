import { IdGenerator } from "../services/IdGenerator";
import { CategoriaDatabase } from "../data/CategoriasDatabase";
import { categoria, categoriaInputDTO } from "../model/categoria";

const idGenerator = new IdGenerator();

export class CategoriaBusiness {
  public adicionarCategoria = async (input: categoriaInputDTO) => {
    try {
      const { TAG, produto_id } = input;

      const id: string = idGenerator.generate();

      const categoriaDatabase = new CategoriaDatabase();
      const categoria: categoria = {
        id,
        TAG,
        produto_id,
      };

      await categoriaDatabase.adicionarCategoria({
        id,
        TAG,
        produto_id,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public TodasCategorias = async (categoria: categoria, config: any) => {
    try {
      return await new CategoriaDatabase().TodasCategorias(categoria, config);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
