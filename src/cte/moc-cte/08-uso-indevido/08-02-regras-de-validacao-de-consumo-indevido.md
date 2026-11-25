<!-- p.81 -->

# 8.2. Regras de Validação de Consumo Indevido

## Autorização de CTe

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| CI01 | CTe enviado com mais de 30* rejeições iguais:<br>- Contribuinte ficará com o WS de autorização recebendo a rejeição 678 por até 1 (uma) * hora para todas as requisições.<br>**Observação 1:** Caso após o tempo de 1 (uma) * hora o contribuinte envie novamente o mesmo CTe e tenha a mesma rejeição, ele poderá voltar a receber a rejeição 678 por até 1 (uma) * hora, e isso se repetirá até ele parar de enviar o CTe com a mesma rejeição.<br>**Observação 2:** A verificação do contribuinte para receber a rejeição 678 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente.<br>**Observação 3:** A critério da UF, após 50* bloqueios o contribuinte poderá receber a rejeição 678 permanentemente, até entrar em contato com a UF autorizadora.<br><br>(*) Critérios preferenciais, parametrizáveis por ambiente autorizador. | Facult.. | 678 | Rej. |

## Consulta Situação

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| CI02 | CTe consultado mais de 10* vezes em 1 (uma) * hora:<br>- Contribuinte ficará com o WS de Consulta Protocolo recebendo a rejeição 678 por até 1 (uma) * hora para todas as requisições.<br>**Observação 1:** Após o tempo de 1 (uma) * hora o contribuinte poderá fazer novamente mais 10* consultas da mesma chave de acesso.<br>**Observação 2:** A verificação do contribuinte para receber a rejeição 678 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente.<br><br>(*) Critérios preferenciais, parametrizáveis por ambiente autorizador. | Facult. | 678 | Rej. |

## Registro de Eventos

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| CI03 | Evento enviado com mais de 20 * rejeições iguais:<br>- Contribuinte ficará com o WS de Eventos recebendo a rejeição 678 por até 1 (uma) * hora para todas as requisições.<br>**Observação 1:** Caso após o tempo de 1 (uma) * hora o contribuinte envie novamente o mesmo Evento e tenha a mesma rejeição, ele poderá voltar a receber a rejeição 678 por até 1 (uma) * hora, e isso se repetirá até ele parar de enviar o Evento com a mesma rejeição.<br>**Observação 2:** A verificação do contribuinte para receber a rejeição 678 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do autor.<br>**Observação 3:** A critério da UF, após 50* bloqueios o contribuinte poderá receber a rejeição 678 permanentemente, até entrar em contato com a UF autorizadora.<br><br>(*) Critérios preferenciais, parametrizáveis por ambiente autorizador. | Facult. | 678 | Rej. |

## Outros Serviços

| # | Regra de Validação | Crítica | Msg | Efeito |
|---|---|---|---|---|
| CI04 | Se for verificado algum tipo de envio em looping (mais de 60* envios repetidos) no período de 5 minutos em outro Web Service que gere erro ou onere o sistema autorizador:<br>- Contribuinte ficará com o Web Service recebendo a rejeição 678 por até 1 (uma) * hora para todas as requisições.<br>**Observação 1:** A verificação do contribuinte para receber a rejeição 678 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ).<br><br>(*) Critérios preferenciais, parametrizáveis por ambiente autorizador. | Facult. | 678 | Rej. |

\* A parametrização dos valores definidos como referência para a rejeição 678 poderão ser alterados a qualquer tempo, a critério do sistema autorizador, de acordo com o comportamento identificado no sistema.
