# 6 Sistema de Registro de Eventos – Parte Geral

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **A08** | Se a forma de emissão (tpEmis) da chave de acesso do MDF-e for Regime Especial da Nota Fiscal Fácil (3):<br>Rejeitar se o certificado de transmissor for diferente do certificado e-CNPJ da SEFAZ Virtual RS para os eventos do emissor (por exemplo: Cancelamento, Encerramento) | Obrig. | 904 | Rej. |

## Validações da Assinatura Digital do Evento

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **F03** | Se Certificado for do tipo e-CNPJ:<br>CNPJ-Base do Autor difere do CNPJ-Base do Certificado Digital<br>**Exceção**: Se a forma de emissão do MDF-e for Regime Especial da Nota Fiscal Fácil, o CNPJ de assinatura DEVERÁ ser o e-CNPJ da SVRS para os eventos do emissor (por exemplo: Cancelamento e encerramento) | Obrig. | 213 | Rej. |

## Validações das Regras de Negócio dos Eventos – Parte Geral

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| **L09** | Se evento do emissor verificar se CNPJ / CPF do Autor diferente do CNPJ / CPF da chave de acesso do MDF-e<br><br>**Observação**: Verificar CPF se a série estiver na faixa 920-969 ou para Regime Especial da Nota Fiscal Fácil (tpEmis=3) para todas as demais verificar como CNPJ | Obrig. | 632 | Rej. |
| **L17** | Se a forma de emissão do MDF-e (tpEmis) for diferente de Regime Especial da Nota Fiscal Fácil (3):<br>- O grupo de informações do pedido de registro de evento da NFF (infSolicNFF) não pode estar preenchido | Obrig. | 902 | Rej. |
