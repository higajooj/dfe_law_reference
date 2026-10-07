# 5. Regras de Validações de Negócio

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I14-10 | 55 | Validar a correspondência entre o código NCM e a unidade tributável (tag: uTrib) nas operações com o Comércio Exterior, conforme segue:<br><br>- Operação de Exportação (tpNF=1-Saída e idDest=3); ou<br><br>- Operações vinculadas a exportação, CFOP=1501, 2501, 5501, 5502, 5504, 5505, 6501, 6502, 6504 ou 6505<br><br>**Observação**: Tabela de Unidades Tributáveis no Comércio Exterior publicada na aba “Documentos”, opção “Diversos” do Portal Nacional da NF-e (www.nfe.fazenda.gov.br)<br><br>Nota: O uso diferenciado de maiúsculas ou minúsculas não deve ser considerado na validação. | Obrig | 817 | Rej. | Rejeição: Unidade Tributável incompatível com o NCM informado na operação com Comércio Exterior [nItem:nnn] |
