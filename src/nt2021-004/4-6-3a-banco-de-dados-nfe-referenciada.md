<!-- p.18 -->
# 4.6 3A. Banco de Dados: NF-e Referenciada

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| 3BA02-10 | 55 | Para cada NF-e referenciada (tag:refNFe), se a UF da Chave de Acesso referenciada for igual a UF do Emitente:<br>– Acessar BD NFE com Chave de Acesso referenciada (se mod=55)<br>– NF-e referenciada inexistente<br>**Exceção:** A NF-e referenciada pode não existir no caso de Emissão em Contingência (tpEmis = 2, 4 ou 5) (NT 2013/003) desde que a Chave de Acesso da NF-e referenciada tenha o Ano-Mês de Emissão inferior a 1 mês da data atual ou desde que exista o EPEC.<br>• **Observação:** A exceção acima não se aplica para “finNFe=2" (NF-e Complementar). | Facul. | 267 | Rej. | Rejeição: Chave de Acesso referenciada inexistente [nRef: xxx] |
