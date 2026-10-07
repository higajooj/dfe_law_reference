<!-- p.12 -->
# 4.3. X. Transporte NF-e

<!-- p.13 -->
| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| **X04-10** | 55 | Obrigatória a informação de identificação do Transportador para os CFOP de venda de combustível (tag: CNPJ/CPF, id:X04/X05) com esta obrigatoriedade na Tabela CFOP, indComb=2.<br><br>**Exceção 1:** A regra de validação acima se aplica somente para as NF-e com Finalidade de Emissão normal (tag:finNFe=1);<br>**Exceção 2:** A regra de validação acima se aplica somente para os Códigos de Produto ANP relacionados na seção 8.11 do MOC – Visão Geral,<br>**Exceção 3:** A regra de validação acima não se aplica se for informada a UF do Transportador no exterior (tag:transporta/UF=“EX”, id:X10);<br>**Exceção 4:** Regra não se aplica quando existir algum item com a UF de consumo do combustível igual a exterior (tag: comb/UFCons = “EX”) e com CFOP = “7667 - Venda de combustível ou lubrificante a consumidor ou usuário final”.<br>**Observação:** Nos casos em que não houver circulação física de mercadoria ou em que o transportador seja estrangeiro, os dados do transportador poderão ser preenchidos com o CNPJ do próprio emitente do documento fiscal. (NT 2015.002) | Facul. | 362 | Rej. | Rejeição: Venda de combustível sem informação do Transportador |
