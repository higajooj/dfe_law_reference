<!-- p.5 -->
# 2.6 Outros Serviços

| Campo-Seq | Modelo | Regra de Validação | Aplic. Msg Efeito | Descrição Erro |
|---|---|---|---|---|
|  | 55/65 | Se for verificado algum tipo de envio em *looping* (mais de 40\* envios repetidos) em outro Web Service que gere erro ou onere o sistema autorizador:<br><!-- p.6 -->- Contribuinte ficará com o Web Service recebendo a rejeição 656 por até 1 (uma)\* hora para todas as requisições.<br><br>Observação 1: A verificação do contribuinte para receber a rejeição 656 poderá ser feita em tempo de conexão pela identificação do CNPJ do certificado digital de transmissão mais o endereço IP (CNPJ + IP) ou pela identificação do CNPJ do emitente (emit/CNPJ).<br><br>(\*) Critérios preferenciais, parametrizáveis por ambiente autorizador. | Facult. 656 Rej. | Rejeição: Consumo indevido pelo aplicativo da empresa [det: DESC_ERRO ] |

\*A parametrização dos valores definidos como referência para a rejeição 656 poderão ser alterados a qualquer tempo, a critério do sistema autorizador, de acordo com o comportamento identificado no sistema.
