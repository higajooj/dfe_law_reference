<!-- p.08 -->

# 1.1.7 Validação da Assinatura Digital

## Validações da Assinatura Digital da GTVe

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **F01** | Assinatura difere do padrão do Projeto:<br>- Não assinado o atributo “ID” (falta “Reference URI” na assinatura)<br>(\*validado também pelo Schema)<br>- Faltam os “Transform Algorithm” previstos na assinatura (“C14N” e “Enveloped”)<br>Estas validações são implementadas pelo Schema XML da Signature | Obrig. | 298 | Rej. |
| **F02** | Valor da assinatura (SignatureValue) difere do valor calculado | Obrig. | 297 | Rej. |
| **F03** | CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital | Obrig. | 213 | Rej. |
