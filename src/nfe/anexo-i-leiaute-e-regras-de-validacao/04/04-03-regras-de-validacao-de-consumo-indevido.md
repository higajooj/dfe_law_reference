# 4.3. Regras de Validação de Consumo Indevido (NT 2018.002)

Atualmente, várias UF autorizadoras de documentos fiscais eletrônicos estão tendo seus serviços utilizados de forma indevida por alguns contribuintes. Esse uso indevido pode comprometer a estabilidade dos Web Services e resultar na saturação dos recursos, deixando o ambiente autorizador inoperante, podendo também ser interpretadas como ataques aos recursos de processamento, rede e armazenamento.

Portanto, para preservar os sistemas autorizadores, observado um comportamento indevido da aplicação de alguma empresa no consumo dos diversos Web Services, a SEFAZ autorizadora, a seu critério, poderá implantar as regras de validação de Consumo Indevido.

O contribuinte que estiver utilizando indevidamente os sistemas poderá sofrer as penalidades definidas na legislação de cada UF.

A critério da SEFAZ Autorizadora, as requisições enviadas em “looping” e/ou com erro poderão ser rejeitadas com o erro “656-Rejeição: Consumo indevido”, independentemente de outras medidas saneadoras do erro detectado.

## 4.3.1. Autorização de NF-e

| Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 55/65 | NF-e/NFC-e* enviada com mais de 30* rejeições iguais: - Contribuinte ficará com o WS de autorização recebendo a rejeição 656 por até 1 (uma)* hora para todas as requisições. | Facul. | 656 | Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: Quantidade de rejeições encontradas: XXX, NF-e: CHAVE_ACESSO] |

Observação 1: Caso após o tempo de 1 (uma)* hora o contribuinte envie novamente a mesma NF-e/NFC-e* e tenha a mesma rejeição, ele poderá voltar a receber a rejeição 656 por até 1 (uma)* hora, e isso se repetirá até ele parar de enviar a NF-e com a mesma rejeição.

Observação 2: A verificação do contribuinte para receber a rejeição 656 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ).

Observação 3: A critério da UF, após 50* bloqueios o contribuinte poderá receber a rejeição 656 permanentemente, até entrar em contato com a UF autorizadora.

(*) Critérios preferenciais, parametrizáveis por ambiente autorizador.

<!-- p.141 -->

## 4.3.2. Consulta Lote

| Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 55/65 | Recibo consultado mais de 40* vezes em 1 (uma)* hora: - Contribuinte ficará com o WS de Consulta Lote recebendo a rejeição 656 por até 1 (uma)* hora para todas as requisições. | Facul. | 656 | Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: Número máximo de consultas excedido (40) para o recibo: NUM_RECIBO] |

**Observação 1:** Após o tempo de 1 (uma)* hora o contribuinte poderá fazer novamente mais 40* consultas do número do lote.

**Observação 2:** A verificação do contribuinte para receber a rejeição 656 será feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ). (*) Critérios preferenciais, parametrizáveis por ambiente autorizador.

## 4.3.3. Inutilização de numeração de NF-e

| Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 55/65 | Inutilização enviada com mais de 20* rejeições iguais: - Contribuinte (CNPJ + IP) ficará com o WS de Inutilização recebendo a rejeição 656 por até 1 (uma)* hora para todas as requisições. | Facul. | 656 | Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: Quantidade de rejeições encontradas: XXX, Inutilização: ID_INUT] |

**Observação 1:** Caso após o tempo de 1 (uma)* hora o contribuinte envie novamente a mesma Inutilização e tenha a mesma rejeição, ele poderá voltar a receber a rejeição 656 por até 1 (uma)* hora, e isso se repetirá até ele parar de enviar a Inutilização com a mesma rejeição.

**Observação 2:** A verificação do contribuinte para receber a rejeição 656 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ).

**Observação 3:** A critério da UF, após 50* bloqueios o contribuinte poderá receber a rejeição 656 permanentemente, até entrar em contato com a UF autorizadora. (*) Critérios preferenciais, parametrizáveis por ambiente autorizador.

## 4.3.4. Consulta Protocolo

| Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 55/65 | NF-e consultada mais de 10* vezes em 1 (uma)* hora: - Contribuinte ficará com o WS de Consulta Protocolo recebendo a rejeição 656 por até 1 (uma)* hora para todas as requisições. | Facul. | 656 | Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: Número máximo de consultas excedido (10) para a NF-e: CHAVE_ACESSO] |

**Observação 1:** Após o tempo de 1 (uma)* hora o contribuinte poderá fazer novamente mais 10* consultas da mesma chave de acesso.

**Observação 2:** A verificação do contribuinte para receber a rejeição 656 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ). (*) Critérios preferenciais, parametrizáveis por ambiente autorizador.

<!-- p.142 -->

## 4.3.5. Registro de Eventos

| Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 55/65 | Evento enviado com mais de 20 * rejeições iguais: - Contribuinte ficará com o WS de Eventos recebendo a rejeição 656 por até 1 (uma)* hora para todas as requisições. | Facul. | 656 | Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: Quantidade de rejeições encontradas: XXX, NF-e: ID_EVENTO] |

**Observação 1:** Caso após o tempo de 1 (uma)* hora o contribuinte envie novamente o mesmo Evento e tenha a mesma rejeição, ele poderá voltar a receber a rejeição 656 por até 1 (uma)* hora, e isso se repetirá até ele parar de enviar o Evento com a mesma rejeição.

**Observação 2:** A verificação do contribuinte para receber a rejeição 656 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ).

**Observação 3:** A critério da UF, após 50* bloqueios o contribuinte poderá receber a rejeição 656 permanentemente, até entrar em contato com a UF autorizadora. (*) Critérios preferenciais, parametrizáveis por ambiente autorizador.

## 4.3.6. Outros Serviços

| Modelo | Regra de Validação | Aplic. | cStat | Efeito | Mensagem |
|---|---|---|---|---|---|
| 55/65 | Se for verificado algum tipo de envio em looping (mais de 40* envios repetidos) em outro Web Service que gere erro ou onere o sistema autorizador: - Contribuinte ficará com o Web Service recebendo a rejeição 656 por até 1 (uma)* hora para todas as requisições. | Facul. | 656 | Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: DESC_ERRO] |

Observação 1: A verificação do contribuinte para receber a rejeição 656 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ). (*) Critérios preferenciais, parametrizáveis por ambiente autorizador.

(*) A parametrização dos valores definidos como referência para a rejeição 656 poderão ser alterados a qualquer tempo, a critério do sistema autorizador, de acordo com o comportamento identificado no sistema.

<!-- p.143 -->

**MOC 7.0 – Anexo I, Leiaute e Regras de Validação da NF-e e da NFC-e**
