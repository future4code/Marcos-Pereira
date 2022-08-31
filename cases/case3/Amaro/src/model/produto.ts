export type produto = {
  id: string;
  nome: string;
  marca: string;
  preco_compra: number;
  icms: number;
  lucro: number;
  preco_venda: number;
};
export interface produtoInputDTO {
  nome: string;
  marca: string;
  preco_compra: number;
  icms: number;
  lucro: number;
  preco_venda: number;
}
