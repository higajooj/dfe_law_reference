<!-- p.4 -->
# 1.1. Alterações introduzidas na Versão 1.10

A versão 1.10 da NT basicamente adia algumas regras de validação do Serviço de Autorização de Nota Fiscal que verificam a existência do GTIN no CCG-Cadastro Centralizado de GTIN para a maior parte dos produtos comercializados.

Foram feitas algumas melhorias na documentação e, de forma mais detalhada, as mudanças desta nova versão da NT são:

**A. Existência do GTIN no CCG**

- Limitada a verificação da existência do GTIN no CCG e o futuro batimento de informações contra esse cadastro de GTIN somente para a NF-e (modelo 55);
- Limitada a verificação da existência do GTIN no CCG nessa fase inicial somente para as operações de venda da Indústria (CFOP de Venda Produção do Estabelecimento) e para alguns grupos de mercadorias específicos. O grupo inicial de Mercadorias consta no Anexo I desta NT - Mercadorias relacionadas com a Indústria de Tabaco, Medicamentos e Brinquedos;
- Demais grupos de Mercadorias a serem validados serão definidos a posteriori, por novas versões dessa NT e com prazos futuros.

**B. Validação do NCM informado na NF-e em relação a informação do CCG (Etapa 2, RV 9I03-20)**

- Esta validação futura será mantida, limitada agora a operação de venda da Indústria, conforme as mercadorias do Anexo I desta NT (Etapa 1: RV 9I03-10 e 9I12-10).

**C. Validação do CEST informado na NF-e em relação a informação do CCG**

- Adiada a implementação da validação do CEST em relação ao CCG, sem data prevista para implementação (RV 9I03-30).

**D. Regras de Validação Eliminadas**

- Eliminada a regra de validação do GTIN da Unidade Tributável em relação ao GTIN Contido informado no CCG. Motivo: existe o GTIN do Kit e este GTIN pode representar um conjunto de GTIN Contidos diferentes (RV 9I03-40).
- Eliminada a regra de validação do GTIN da Unidade Tributável em relação ao NCM informado no CCG. Motivo: esta verificação já é feita para o campo cEAN (RV 9I12-20).
- Eliminada a regra de validação do GTIN da Unidade Tributável em relação ao CEST informado no CCG. Motivo: esta verificação já é feita para o campo cEAN (RV 9I12-30).

**E. Diversos**

- Correção da documentação para o código de erro da RV U01-30;
