import { categoria } from "../model/categoria";
import { BaseDatabase } from "./BaseDatabase";

export class CategoriaDatabase extends BaseDatabase {
  private static CATEGORIAS = "CATEGORIAS";
  public adicionarCategoria = async (categoria: categoria) => {
    try {
      await this.getConnection()
        .insert({
          id: categoria.id,
          TAG: categoria.TAG,
          produto_id: categoria.produto_id,
        })
        .into(CategoriaDatabase.CATEGORIAS);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public TodasCategorias = async (config: any, categoria: categoria) => {
    try {
      const result = await this.getConnection()
        .select("TAG", "produto_id")
        .orderBy(config.sort, config.order)
        .limit(config.size)
        .offset(config.offset)
        .from(CategoriaDatabase.CATEGORIAS);
      return { Categotias: result };
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
