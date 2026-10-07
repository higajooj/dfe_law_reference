<!-- p.7 -->
# 5.3. Grupo I. Produtos e Serviços da NF-e

| # | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I08-191 | 55 | Se não informada a IE do emitente (tag: emit/IE):<br>- Consultar tabela de CFOP permitidos para emitentes exclusivos do IBS/CBS (coluna: indExcIBSCBS) publicada no Portal Nacional da NF-e.<br>**Exceção 1:** a regra acima não se aplica no caso de finalidade da NF-e igual a devolução (tag:finNFe=4).<br>**Exceção 2:** a regra acima não se aplica no caso Tipo de Nota de Crédito igual a “03=Retorno por Recusa Total na Entrega ou Por Não Localização do Destinatário na Tentativa de Entrega” (tag: tpNFCredito=03).<br>**Observação:** Regra de validação exclusiva da SVRS. | Obrig. | 159 | Rej. | Rejeição: Operação não permitida para contribuinte exclusivo do IBS/CBS. [nItem:999] |
