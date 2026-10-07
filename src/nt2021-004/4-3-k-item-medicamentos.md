<!-- p.15 -->
# 4.3. K. Item/Medicamentos

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| K01-10 | 55 | Informado NCM de medicamento é obrigatório o preenchimento do Grupo de Medicamento (tag: med).<br>**Observação 1:** Regra de validação a critério da UF.<br>**Observação 2:** Os medicamentos são classificados nos NCMs que começam com 3001, 3002, 3003, 3004, 3005 e 3006<br>**Observação 3:** Para os medicamentos que não possuam código de Produto da ANVISA, o campo cProdANVISA do Grupo de Medicamentos deverá ser preenchido com o literal “ISENTO”<br>**Observação 4:** Implementação futura. | Facult. | 840 | Rej. | Rejeição: NCM de medicamento e não informado o grupo de medicamento (med) [nItem:nnn] |
| K01-20 | 55 | Se informado Grupo de Medicamentos (tag :med) obrigatório preenchimento do grupo rastro (id: I80) (NT 2016.002)<br>**Exceção 1:** Regra de Validação não se aplica para NF-e de devolução (finNFe = 4), ou NF-e de Ajuste (finNFe=3), ou NF-e Complementar (finNFe=2)<br>**Exceção 2:** Regra de Validação não se aplica para NF-e de venda não presencial (indPres = 2 ou 3)<br>**Exceção 3:** Regra de validação não se aplica para CFOP de venda para entrega futura ~~(CFOPs 5116 e 6116)~~ (CFOPs 5922, 6922) ou CFOP de Venda à Ordem (5118, 6118, 5119, 6119, 5120 e 6120)<br>**Exceção 4:** Regra de validação não se aplica para NF-e de entrada (tpNF=0) | Obrig. | 873 | Rej | Rejeição: Operação com medicamentos e não informado os campos de rastreabilidade [nItem: nnn] |

> **Revogado/Descontinuado:** trecho “(CFOPs 5116 e 6116)” da Exceção 3 da Regra K01-20 riscado no original.
