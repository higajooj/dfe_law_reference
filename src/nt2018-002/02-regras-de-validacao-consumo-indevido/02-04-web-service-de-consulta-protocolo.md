<!-- p.4 -->
# 2.4 Web Service de Consulta Protocolo

| Campo-Seq | Modelo | Regra de Validação | Aplic. Msg Efeito | Descrição Erro |
|---|---|---|---|---|
|  | 55/65 | NF-e consultada mais de 10\* vezes em 1 (uma)\* hora:<br>- Contribuinte ficará com o WS de Consulta Protocolo recebendo a rejeição 656 por até 1 (uma)\* hora para todas as requisições.<br><br>Observação 1: Após o tempo de 1 (uma)\* hora o contribuinte poderá fazer novamente mais 10\* consultas da mesma chave de acesso.<br><br><!-- p.5 -->Observação 2: A verificação do contribuinte para receber a rejeição 656 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ).<br><br>(\*) Critérios preferenciais, parametrizáveis por ambiente autorizador. | Facult. 656 Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: Número máximo de consultas excedido (10) para a NF-e: CHAVE_ACESSO] |
