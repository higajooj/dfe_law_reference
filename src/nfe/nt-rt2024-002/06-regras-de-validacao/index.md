<!-- p.23 -->
# 6. Regras de Validação

## Grupo B. Identificação da Nota Fiscal eletrônica

| Campo-Seq | Modelo | Regra de Validação | Aplic. | Msg | Efeito | Descrição Erro |
|---|---|---|---|---|---|---|
| B25-80 | 55/65 | Se finalidade da NF-e igual a crédito ou débito (tag:finNFe=5 ou 6): Não pode ser informado ICMS (tag: ICMS), ISSQN (tag: ISSQN), IPI (tag: IPI), II (tag: II), PIS (tag: PIS), PIS ST (tag: PISST), COFINS(tag: COFINS), COFINS ST (tag: COFINSST), ICMS UF Destino (tag: ICMSUFDest) e Imposto Devolvido (tag: impostoDevol). | Obrig. | 391 | Rej. | Rejeição: NF-e com finalidade de débito ou crédito somente para IBS/CBS. |
| B25-90 | 55/65 | Se finalidade da NF-e diferente de crédito ou débito (tag:finNFe=5 ou 6): Deve ser informado ICMS (tag: ICMS) ou ISSQN (tag: ISSQN). | Obrig. | 392 | Rej. | Rejeição: NF-e sem informação de ICMS / ISSQN. |
| B25b-50 | 65 | NF-e com indicativo de NFC-e com entrega a domicílio (tag:indPres=4) e não informado endereço do destinatário (id: E5, grupo: enderDest) | Obrig. | 393 | Rej. | Rejeição: NFC-e de entrega a domicílio e não informado endereço do destinatário. |
