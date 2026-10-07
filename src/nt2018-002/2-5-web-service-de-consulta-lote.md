<!-- p.5 -->
# 2.5 Web Service de Consulta Lote

| Campo-Seq | Modelo | Regra de Validação | Aplic. Msg Efeito | Descrição Erro |
|---|---|---|---|---|
|  | 55/65 | Recibo consultado mais de 40\* vezes em 1 (uma)\* hora:<br>- Contribuinte ficará com o WS de Consulta Lote recebendo a rejeição 656 por até 1 (uma)\* hora para todas as requisições.<br><br>Observação 1: Após o tempo de 1 (uma)\* hora o contribuinte poderá fazer novamente mais 40\* consultas do número do lote.<br><br>Observação 2: A verificação do contribuinte para receber a rejeição 656 será feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ).<br><br>(\*) Critérios preferenciais, parametrizáveis por ambiente autorizador. | Facult. 656 Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: Número máximo de consultas excedido (40) para o recibo: NUM_RECIBO] |
