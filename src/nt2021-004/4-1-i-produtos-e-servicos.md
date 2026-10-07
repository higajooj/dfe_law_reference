<!-- p.14 -->
# 4.1. I. Produtos e Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| I08-140 | 55 | Para as NF-e com finalidade de devolução de mercadoria (tag:finNFe=4), somente serão aceitos CFOP de devolução de mercadoria.<br>**Observação:** Vide relação de CFOP de devolução de mercadoria natabela de apoio publicada no Portal da NF-e (Tabela CFOP, indDevol=1).<br>**Exceção 1:** Aceitar os CFOP 1.949 e 2.949 na devolução de venda para não Contribuinte. Para estes CFOP verificar a condição:<br>tag:finNFe = 4 (devolução) e tag:indIEDest = 9 (não Contribuinte) (NT 2015.002)<br>**Exceção 2:** Aceitar os CFOP 5.949 e 6.949 na devolução simbólica de gás natural (NCM 27112100) nos termos do Ajuste SINIEF nº 22/21 | Obrig. | 327 | Rej. | Rejeição: CFOP inválido para Nota Fiscal com finalidade de devolução de mercadoria[nItem:nnn] |
