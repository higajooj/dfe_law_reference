<!-- p.28 -->
# 4.1. I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. Msg Efeito | Descrição Erro |
|---|---|---|---|---|
| I13-20 | 55/65 | Informado campo cProdANP (id: LA02) e produto está presente na Tabela de Combustíveis Sujeitos à Tributação Monofásica (coluna cProdANP)<br>&nbsp;&nbsp;&nbsp;- Se campo uTrib (id: I13) diferente da unidade informada na coluna (“Unidade Tributária”) correspondente (ignorar a diferenciação entre maiúsculas e minúsculas)<br><br>**Exceção**: Regra da validação não aplicável para:<br>&nbsp;&nbsp;&nbsp;- Operação de Exportação (tpNF=1-Saída e idDest=3); ou<br>&nbsp;&nbsp;&nbsp;- Operações vinculadas a exportação, CFOP=1501, 2501, 5501, 5502, 5504, 5505, 6501, 6502, 6504 ou 6505.<br><br>**Observação 1:** Tabela de Combustíveis Sujeitos à Tributação Monofásica publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da Nota Fiscal Eletrônica.<br><br>**Observação 2:** Regra implantada até 25/09/2023 em homologação e em 30/10/2023 em produção. | Obrig. 854 Rej. | Rejeição: Unidade Tributável (tag:uTrib) incompatível com produto informado [nItem: 999] |
