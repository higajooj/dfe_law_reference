# 7 Sistema de Registro de Eventos – Parte Geral

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **A08** | Se a forma de emissão (tpEmis) da chave de acesso do CT-e for Regime Especial da Nota Fiscal Fácil (3):<br>Rejeitar se o certificado de transmissor for diferente do certificado e-CNPJ da SEFAZ Virtual RS para os eventos do emissor (por exemplo: Cancelamento, Comprovante de entrega e Cancelamento do Comprovante de entrega) | Obrig. | 904 | Rej. |

## Validações da Assinatura Digital do Evento

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **F03** | CNPJ-Base do Autor difere do CNPJ-Base do Certificado Digital<br><br>**Exceção**: Se a forma de emissão do CT-e for Regime Especial da Nota Fiscal Fácil, o CNPJ de assinatura DEVERÁ ser o e-CNPJ da SVRS para os eventos do emissor (por exemplo: Cancelamento, Comprovante de Entrega e Canc. Comprovante de entrega) | Obrig. | 213 | Rej. |

## Validações das Regras de Negócio dos Eventos – Parte Geral

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **L04** | Validar CNPJ do autor do evento (DV ou zeros)<br>**Exceção**: Se o evento for de emissor (por exemplo: Cancelamento, Comprovante de entrega, Canc. Comprovante de Entrega) quando a forma de emissão do CT-e (tpEmis) for Regime Especial da Nota Fiscal Fácil (3), no lugar do CNPJ será informado o CPF do TAC emitente, conforme alteração de schema descrita no item 3.5 | Obrig. | 627 | Rej. |
| **L04c** | Se forma de emissão da chave de acesso do CT-e for Regime Especial da Nota Fiscal Fácil e o tipo de evento for do emissor:<br>- Validar CPF do autor do evento (DV ou zeros) | Obrig. | 905 | Rej. |
| **L10** | - Validar chave de acesso do CT-e<br>Retornar motivo da rejeição da Chave de Acesso: CNPJ/CPF zerado ou inválido, Ano < 2009 ou maior que atual, Mês inválido (0 ou > 12), Modelo diferente de 57/67, Número zerado, Forma de emissão inválido, UF inválida ou DV inválido)<br>[Motivo: XXXXXXXXXXXX] | Obrig. | 236 | Rej. |
| **L14** | Se evento do emissor verificar se CNPJ/CPF do Autor diferente do CNPJ/CPF da chave de acesso do CT-e | Obrig. | 632 | Rej. |
| **L17** | Se evento exige CT-e:<br>Acesso BD CT-e (Chave: CNPJ/CPF Emit, Modelo, Série, Nº):<br>- Verificar se CT-e não existe | Obrig. | 217 | Rej. |
| **L23** | Se a forma de emissão do CT-e (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3):<br>- O grupo de informações do pedido de registro de evento da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. |
